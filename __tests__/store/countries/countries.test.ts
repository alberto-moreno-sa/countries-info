import {
  setAllCountriesAction,
  SET_ALL_COUNTRIES,
  countriesInitialState,
  countriesReducer,
  CountryState,
  Country,
  selectedCountryAction,
  SET_COUNTRY,
} from 'store/countries';

describe('CountriesRedux', () => {
  const countries: Country[] = [
    {
      name: 'Bangladesh',
      alpha2Code: 'BGD',
      alpha3Code: 'BGD',
      region: 'Asia',
      callingCodes: ['546'],
      currencies: [
        {
          name: 'Bangladeshi taka',
          code: 'USD',
        },
      ],
      flag: 'https://flagcdn.com/bd.svg',
    },
    {
      name: 'Barbados',
      alpha2Code: 'BRB',
      alpha3Code: 'BRB',
      region: 'Americas',
      callingCodes: ['546'],
      currencies: [
        {
          name: 'Barbadian dollar',
          code: 'USD',
        },
      ],
      flag: 'https://flagcdn.com/bb.svg',
    },
  ];

  describe('Action setAllCountriesAction', () => {
    it('returns action and payload as expected', () => {
      const action = setAllCountriesAction(countries);
      const reducer = countriesReducer(countriesInitialState, action);
      expect(action.type).toBe(SET_ALL_COUNTRIES);
      expect(action.payload).toMatchObject(countries);
      expect(reducer.all).toMatchObject(countries);
    });
  });

  describe('Action selectedCountryAction', () => {
    it('returns action and payload as expected', () => {
      const action = selectedCountryAction(countries[0]);
      const reducer = countriesReducer(countriesInitialState, action);
      expect(action.type).toBe(SET_COUNTRY);
      expect(action.payload).toMatchObject(countries[0]);
      expect(reducer.selected).toMatchObject(countries[0]);
    });
  });
});
