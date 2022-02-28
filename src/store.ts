import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { rootReducer } from 'reducers';

const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

const confStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
    devTools: process.env.NODE_ENV === 'development',
  });
};

const store = confStore();

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export { store, confStore };
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
