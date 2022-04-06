import { updateHistory } from 'utils/CountriesHelper';
import {
  CountryState,
  CountriesActionTypes,
  SET_ALL_COUNTRIES,
  SET_COUNTRY,
} from './types';

export const countriesInitialState: CountryState = {
  all: [],
  history: [],
  selected: {
    name: '',
    alpha3Code: '',
    alpha2Code: '',
    callingCodes: [],
    flag: '',
    region: '',
    currencies: [],
  },
};

export function countriesReducer(
  state = countriesInitialState,
  action: CountriesActionTypes
): CountryState {
  switch (action.type) {
    case SET_ALL_COUNTRIES:
      return {
        ...state,
        all: action.payload,
      };
    case SET_COUNTRY: {
      return {
        ...state,
        selected: action.payload,
        history: updateHistory(state.history, action.payload),
      };
    }
    default:
      return state;
  }
}
