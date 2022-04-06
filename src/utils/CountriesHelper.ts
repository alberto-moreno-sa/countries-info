import { HistoryItem, Country } from 'store/countries';

export const searchCountryByName = (
  countries: Country[],
  search: string
): Country[] => {
  if (search === '') {
    return countries;
  }

  return countries.filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
};

export const searchCountryByRegion = (
  countries: Country[],
  region: string
): Country[] => {
  if (!region) {
    return countries;
  }

  return countries.filter(country => country.region === region);
};

export const getCountryNameByCode = (
  countries: Country[],
  code: string
): string => {
  const country = countries.find(country => country.alpha3Code === code);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const name = country ? country.name : code;
  return name;
};

export const shortHistoryByName = (
  countryList: HistoryItem[]
): HistoryItem[] => {
  const isValid = Boolean(countryList) && countryList.length > 0;
  if (!isValid) {
    return [];
  }

  const temp = [...countryList];
  temp.sort((a: HistoryItem, b: HistoryItem) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return temp;
};

export const updateHistory = (
  history: HistoryItem[],
  country: Country
): HistoryItem[] => {
  const newHistory = [...history];
  const countryIndex = history.findIndex(
    item => item.alpha3Code === country.alpha3Code
  );

  if (countryIndex > -1) {
    newHistory[countryIndex] = {
      alpha3Code: newHistory[countryIndex].alpha3Code,
      name: newHistory[countryIndex].name,
      clicks: newHistory[countryIndex].clicks + 1,
    };

    return newHistory;
  }

  newHistory.push({
    alpha3Code: country.alpha3Code,
    name: country.name,
    clicks: 1,
  });

  return shortHistoryByName(newHistory);
};
