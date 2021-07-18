import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import contactsPersistReducer from 'redux/contacts/contacts-persist';
import middlewares from './middlewares';

export const vault = configureStore({
  reducer: { contacts: contactsPersistReducer },
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(vault);
