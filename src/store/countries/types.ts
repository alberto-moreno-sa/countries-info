// https://redux.js.org/recipes/usage-with-typescript
export const SET_ALL_COUNTRIES = 'SET_ALL_COUNTRIES';
export const SET_COUNTRY = 'SET_COUNTRY';

export interface Country {
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

export interface HistoryItem {
  alpha3Code: string;
  name: string;
  clicks: number;
}

export interface CountryState {
  all: Country[];
  history: HistoryItem[];
  selected: Country | null;
}

interface setAllCountriesAction {
  type: typeof SET_ALL_COUNTRIES;
  payload: Country[];
}

interface selectedCountryAction {
  type: typeof SET_COUNTRY;
  payload: Country;
}

export type CountriesActionTypes =
  | setAllCountriesAction
  | selectedCountryAction;
