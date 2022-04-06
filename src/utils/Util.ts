import camelCase from 'camelcase-keys';
import configs from 'configs';

export const isProduction = configs.env === 'production';

export class Util {
  static keysToCamelCase<T>(input: T): T {
    return camelCase(input, { deep: true }) as T;
  }

  static isServer(): boolean {
    return typeof window === 'undefined';
  }
}
