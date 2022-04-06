import React from 'react';
import { Card } from 'components/common';
import { useSelector } from 'store/store';
import styles from 'styles/components/country/countryDetail.module.scss';

interface CurrencyPorps {
  currencies: Array<{
    code: string;
    name: string;
  }> | null;
}

const Currency: React.FC<CurrencyPorps> = ({ currencies }: CurrencyPorps) => {
  const isValid =
    Boolean(currencies) && currencies.length > 0 && Boolean(currencies[0].code);

  if (!isValid) {
    return <div className={styles.value}>No currency Info</div>;
  }

  return <div className={styles.value}>{currencies[0].code}</div>;
};

interface CallingCodesProps {
  callingCodes: string[] | null;
}

const CallingCode: React.FC<CallingCodesProps> = ({
  callingCodes = null,
}: CallingCodesProps) => {
  const isValid = Boolean(callingCodes) && callingCodes.length > 0;

  if (!isValid) {
    return <div className={styles.value}>No callingcode available</div>;
  }

  return <div className={styles.value}>+{callingCodes[0]}</div>;
};

export const CountryDetail: React.FC = () => {
  const selectedCountry = useSelector(state => state.countries.selected);

  return (
    <Card>
      <div className={styles.countryDetail}>
        <div className={styles.title}>Detail</div>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.label}>Name:</div>
            <div className={styles.value}>{selectedCountry.name}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Dial Code:</div>
            <CallingCode callingCodes={selectedCountry.callingCodes} />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Continent:</div>
            <div className={styles.value}>{selectedCountry.region}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Currency Code:</div>
            <Currency currencies={selectedCountry.currencies} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CountryDetail;
