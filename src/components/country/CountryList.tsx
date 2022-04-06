import React from 'react';
import { useSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'services/TranslationService';
import { Country, selectedCountryAction } from 'store/countries';
import { Card } from 'components/common';
import CountryPreview from './CountryPreview';
import styles from 'styles/components/country/countryList.module.scss';

export const CountryList: React.FC = () => {
  const { t } = useTranslation('common');
  const countries = useSelector(state => state.countries.all);
  const selectedCountry = useSelector(state => state.countries.selected);

  const dispatch = useDispatch();

  const handleClick = (country: Country): void => {
    dispatch(selectedCountryAction(country));
  };

  return (
    <Card>
      <div>
        <div className={styles.title}>{t('general.countries')}</div>
        <div className={styles.table}>
          {countries.map(country => (
            <div
              key={country.name}
              className={`${styles.row} ${
                selectedCountry.alpha3Code === country.alpha3Code
                  ? styles.active
                  : ''
              } `}
              onClick={() => handleClick(country)}
            >
              <CountryPreview {...country} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CountryList;
