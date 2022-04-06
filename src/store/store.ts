import configs from 'configs';
import {
  createStore,
  applyMiddleware,
  combineReducers,
  StoreEnhancer,
  Store,
  Reducer,
  AnyAction,
} from 'redux';
import packageInfo from './../../package.json';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import {
  countriesReducer,
  countriesInitialState,
  setAllCountriesAction,
  Country,
} from './countries';
import { createSelectorHook } from 'react-redux';
import { CountriesService } from 'services';
import { Util } from 'utils/Util';

interface AppStore extends Store {}

const combinedReducer = combineReducers({
  countries: countriesReducer,
});

export const PERSIST_KEY = 'countries';
export type RootState = ReturnType<typeof combinedReducer>;
export const useSelector = createSelectorHook<RootState>();

export const InitialState: RootState = {
  countries: countriesInitialState,
};

export interface PersistedState extends RootState {
  persistVersion: string;
}

const version = packageInfo.version;

export const reducer = (state = InitialState, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    if (!Util.isServer()) {
      const persistedState = localStorage.getItem(PERSIST_KEY);
      if (persistedState !== null) {
        try {
          const persistedStateObj: PersistedState = JSON.parse(persistedState);

          if (
            JSON.stringify(action.payload.countries.all) ===
              JSON.stringify(persistedStateObj.countries.all) &&
            persistedStateObj.persistVersion === version
          ) {
            delete persistedStateObj.persistVersion;
            state = { ...persistedStateObj };
          } else {
            state = { ...state };
          }
        } catch (error) {
          console.error('Persist state error', error);
        }
      }
    }

    const countries =
      state.countries.all.length > 0
        ? state.countries
        : action.payload.countries;

    // Persists on hydrate
    const nextState: RootState = {
      ...state,
      ...action.payload,
      countries: countries,
    };

    return nextState;
  }

  return combinedReducer(state, action);
};

const bindMiddleware = (middleware): StoreEnhancer => {
  if (configs.env === 'local') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { logger } = require('redux-logger');
    middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

export let store: AppStore = null;
const makeConfiguredStore = (r: Reducer<RootState>): Store =>
  createStore(r, InitialState, bindMiddleware([thunkMiddleware]));

export const makeStore = (context: Context): Store => {
  const isServer = Util.isServer();
  store = makeConfiguredStore(reducer);
  store.subscribe(() => {
    if (!isServer) {
      localStorage.setItem(
        PERSIST_KEY,
        JSON.stringify({ ...store.getState(), persistVersion: version })
      );
    }
  });

  return store;
};

export const storeSetCountries = async (store: Store): Promise<void> => {
  const countries = await CountriesService.getCountries();
  store.dispatch(setAllCountriesAction(countries as Country[]));
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: configs.env === 'local',
});
