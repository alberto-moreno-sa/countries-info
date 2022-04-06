import React from 'react';
import { Card } from 'components/common';
import { useSelector } from 'store/store';
import { useTranslation } from 'services/TranslationService';
import styles from 'styles/components/history/historyList.module.scss';

export const HistoryList: React.FC = () => {
  const { t } = useTranslation('common');
  const history = useSelector(state => state.countries.history);

  return (
    <Card>
      <div className={styles.title}>{t('history.title')}</div>
      <div className={styles.header}>
        <div className={styles.herderText}>{t('history.name')}</div>
        <div className={styles.herderText}>{t('history.clicks')}</div>
      </div>
      <div className={styles.historyList}>
        {history.map(item => (
          <div key={item.name} className={styles.group}>
            <div className={styles.item}>
              <div className={styles.itemName}>{item.name}</div>
              <div className={styles.itemCounter}>{item.clicks}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default HistoryList;
