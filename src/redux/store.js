import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/contacts/contacts-reducers';
import middlewares from './middlewares';

export const vault = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});
