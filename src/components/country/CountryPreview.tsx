import React from 'react';
import styles from 'styles/components/country/countryPreview.module.scss';

interface CountryPreviewProps {
  flag: string;
  name: string;
}

export const CountryPreview: React.FC<CountryPreviewProps> = ({
  flag = '',
  name = '',
}: CountryPreviewProps) => {
  return (
    <div className={styles.countryPreview}>
      <div className={styles.flagContent}>
        <img
          width="100"
          height="100"
          className={styles.flag}
          src={flag}
          alt={name}
        />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};

export default CountryPreview;
