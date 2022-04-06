import {
  AxiosStatic,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { Util } from 'utils';

export interface RequestorError extends AxiosError {}
export interface RequestOptions {
  disableLogger: boolean;
}

export class Requestor {
  static client: AxiosStatic = null;

  static async getRequestBody<T>(
    req: AxiosRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    const response = await this.getRequest(req, options);
    return response.data as T;
  }

  static async initClient(): Promise<void> {
    this.client = (await import('axios')).default;
    this.client.interceptors.response.use(
      (response) => {
        response.data = Util.keysToCamelCase(response.data);
        return response;
      },
      (error) => {
        if (error?.response?.data !== null) {
          error.response.data = Util.keysToCamelCase(error.response.data);
        }
        throw error.response;
      }
    );
  }

  static async getRequest(
    req: AxiosRequestConfig,
    options?: RequestOptions
  ): Promise<AxiosResponse> {
    const isServer = typeof window === 'undefined';
    const start = new Date().getTime();
    const messageInfo = '[Requestor:getRequest]';
    const newOptions = {
      disableLogger: Boolean(options) && options.disableLogger,
    };

    let Logger = null;
    const enableLogs = !newOptions.disableLogger && isServer;
    if (enableLogs) {
      Logger = (await import('utils/Logger')).Logger;
      Logger.info('%s performing request: %j', messageInfo, req);
    }

    try {
      if (this.client === null) {
        await this.initClient();
      }

      const response = await this.client.request(req);
      if (enableLogs && Logger !== null) {
        Logger.info('%s response: %j', messageInfo, response.data);
      }

      return response;
    } catch (error) {
      if (!newOptions.disableLogger && Logger !== null) {
        Logger.info('%s error: %j', messageInfo, error);
      }
      throw error;
    } finally {
      if (enableLogs && Logger !== null) {
        const end = new Date().getTime() - start;
        Logger.info('%s Processed request in: %sms', messageInfo, end);
      }
    }
  }
}
