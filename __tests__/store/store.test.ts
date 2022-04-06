import { HYDRATE } from 'next-redux-wrapper';
import { InitialState, reducer } from 'store/store';

import packageInfo from './../../package.json';

const countries = [
  {
    name: 'Bangladesh',
    topLevelDomain: ['.bd'],
    alpha2Code: 'BD',
    alpha3Code: 'BGD',
    callingCodes: ['880'],
    capital: 'Dhaka',
    altSpellings: [
      'BD',
      "People's Republic of Bangladesh",
      'Gônôprôjatôntri Bangladesh',
    ],
    subregion: 'Southern Asia',
    region: 'Asia',
    population: 164689383,
    latlng: [24.0, 90.0],
    demonym: 'Bangladeshi',
    area: 147570.0,
    gini: 32.4,
    timezones: ['UTC+06:00'],
    borders: ['MMR', 'IND'],
    nativeName: 'Bangladesh',
    numericCode: '050',
    flags: {
      svg: 'https://flagcdn.com/bd.svg',
      png: 'https://flagcdn.com/w320/bd.png',
    },
    currencies: [
      {
        code: 'BDT',
        name: 'Bangladeshi taka',
        symbol: '৳',
      },
    ],
    languages: [
      {
        iso639_1: 'bn',
        iso639_2: 'ben',
        name: 'Bengali',
        nativeName: 'বাংলা',
      },
    ],
    translations: {
      br: 'Bangladesh',
      pt: 'Bangladeche',
      nl: 'Bangladesh',
      hr: 'Bangladeš',
      fa: 'بنگلادش',
      de: 'Bangladesch',
      es: 'Bangladesh',
      fr: 'Bangladesh',
      ja: 'バングラデシュ',
      it: 'Bangladesh',
      hu: 'Banglades',
    },
    flag: 'https://flagcdn.com/bd.svg',
    regionalBlocs: [
      {
        acronym: 'SAARC',
        name: 'South Asian Association for Regional Cooperation',
      },
    ],
    cioc: 'BAN',
    independent: true,
  },
  {
    name: 'Barbados',
    topLevelDomain: ['.bb'],
    alpha2Code: 'BB',
    alpha3Code: 'BRB',
    callingCodes: ['1'],
    capital: 'Bridgetown',
    altSpellings: ['BB'],
    subregion: 'Caribbean',
    region: 'Americas',
    population: 287371,
    latlng: [13.16666666, -59.53333333],
    demonym: 'Barbadian',
    area: 430.0,
    timezones: ['UTC-04:00'],
    nativeName: 'Barbados',
    numericCode: '052',
    flags: {
      svg: 'https://flagcdn.com/bb.svg',
      png: 'https://flagcdn.com/w320/bb.png',
    },
    currencies: [
      {
        code: 'BBD',
        name: 'Barbadian dollar',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English',
      },
    ],
    translations: {
      br: 'Barbados',
      pt: 'Barbados',
      nl: 'Barbados',
      hr: 'Barbados',
      fa: 'باربادوس',
      de: 'Barbados',
      es: 'Barbados',
      fr: 'Barbade',
      ja: 'バルバドス',
      it: 'Barbados',
      hu: 'Barbados',
    },
    flag: 'https://flagcdn.com/bb.svg',
    regionalBlocs: [
      {
        acronym: 'CARICOM',
        name: 'Caribbean Community',
        otherNames: [
          'Comunidad del Caribe',
          'Communauté Caribéenne',
          'Caribische Gemeenschap',
        ],
      },
    ],
    cioc: 'BAR',
    independent: true,
  },
];

describe('store', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('HYDRATE', () => {
    it('persist store with same countries and persistversion', () => {
      const initialState = {
        ...InitialState,
        countries: {
          ...InitialState.countries,
          all: countries,
        },
      };
      Object.defineProperty(window, 'localStorage', {
        value: {
          getItem: jest.fn(() =>
            JSON.stringify({
              ...initialState,
              persistVersion: packageInfo.version,
            })
          ),
          setItem: jest.fn(() => null),
        },
        writable: true,
      });
      const reducerResult = reducer(InitialState, {
        type: HYDRATE,
        payload: initialState,
      });
      expect(reducerResult.countries.all).toEqual(countries);
    });
  });
});
