// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },

  resources: { es: { translations: {} } },
});

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      prefetch: () => null,
      push: () => null,
      replace: () => null,
      withRouter: () => null,
    };
  },
}));

const url = 'http://localhost';
Object.defineProperty(window, 'location', {
  value: {
    pathname: url,
    assign: jest.fn(),
  },
  writable: true,
});
