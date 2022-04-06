import React from 'react';
import { useTranslation } from 'services/TranslationService';
import styles from 'styles/components/common/banner.module.scss';

export const Banner: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.preview}>
          <img
            loading="lazy"
            className={styles.picture}
            src="/images/banner-pic.png"
            alt=""
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{t('banner.title')}</div>
          <div className={styles.text}>{t('banner.info')}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
