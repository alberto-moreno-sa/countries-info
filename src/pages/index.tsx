import React from 'react';
import { cacheConfig } from 'configs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPage, GetStaticProps } from 'next';
import { Layout } from 'components/layout';
import { Logger } from 'utils/Logger';
import { wrapper, storeSetCountries } from 'store/store';
import { CountryDetail, CountryList } from 'components/country';
import { HistoryList } from 'components/history';
import styles from 'styles/pages/home.module.scss';
import Banner from 'components/common/Banner';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <div className={styles.home}>
        <div className={styles.content}>
          <CountryList />
          <CountryDetail />
          <HistoryList />
        </div>
      </div>
    </Layout>
  );
};

HomePage.displayName = 'HomePage';

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({ locale, store }) => {
    try {
      await storeSetCountries(store);
    } catch (error) {
      Logger.error('Error ', error);
    }

    return {
      revalidate: cacheConfig.cacheValue,
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'countryDetailPage',
        ])),
      },
    };
  }
);

export default HomePage;
