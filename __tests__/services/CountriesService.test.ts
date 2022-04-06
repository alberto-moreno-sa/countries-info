import { Requestor, ErrorException } from 'utils';
import { CountriesService } from 'services';

describe('EcommerceService', () => {
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

  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe('getAvailablePspTypes', () => {
    it('should request using axios and return its response with a country', async () => {
      const spyRequest = jest
        .spyOn(Requestor, 'getRequestBody')
        .mockResolvedValueOnce(countries);

      const result = await CountriesService.getCountries();
      expect(result).toEqual(countries);
      expect(spyRequest).toBeCalledTimes(1);
      spyRequest.mockRestore();
      jest.clearAllMocks();
    });

    it('should throw an ErrorException', async () => {
      const mockRequest = jest
        .fn()
        .mockRejectedValue({ data: { error: { moreInfo: 'Unknown' } } });
      Requestor.getRequestBody = mockRequest;
      try {
        await CountriesService.getCountries();
      } catch (error) {
        expect(error.code).toBe(ErrorException.GENERIC_ERROR);
      }
      jest.clearAllMocks();
    });
  });
});
