import {
  SET_COUNTRY,
  SET_ALL_COUNTRIES,
  CountriesActionTypes,
  Country,
} from './types';

export function setAllCountriesAction(
  countries: Country[]
): CountriesActionTypes {
  return {
    type: SET_ALL_COUNTRIES,
    payload: countries,
  };
}

export function selectedCountryAction(country: Country): CountriesActionTypes {
  return {
    type: SET_COUNTRY,
    payload: country,
  };
}
