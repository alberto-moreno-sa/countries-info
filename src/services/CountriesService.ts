import { countryConfig } from 'configs';
import { ErrorException } from 'utils';
import { Requestor } from 'utils/Requestor';

interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  flag: string;
  region: string;
  currencies: Array<{
    code: string;
    name: string;
  }>;
}

export class CountriesService {
  static async getCountries(): Promise<Country[]> {
    try {
      return await Requestor.getRequestBody<Country[]>({
        method: 'GET',
        url: countryConfig.url,
      });
    } catch (error) {
      const msgError = `Error fetching ${String(error)}`;
      throw new ErrorException(msgError);
    }
  }
}
