import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactSuccess,
  deleteContactSuccess,
  setContactsFilter,
  showExistNotify,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  fetchListOfContactsRequest,
  fetchListOfContactsSuccess,
  fetchListOfContactsError,
} from 'redux/contacts/contacts-actions';

const itemsInitial = [];
const items = createReducer(itemsInitial, {
  [fetchListOfContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [setContactsFilter]: (_, { payload }) => payload,
});

const notify = createReducer('', {
  [showExistNotify]: (state, { payload }) => {
    return { ...state, ...payload };
  },
});

const loading = createReducer(false, {
  [fetchListOfContactsRequest]: () => true,
  [fetchListOfContactsSuccess]: () => false,
  [fetchListOfContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const lastError = createReducer(null, {
  [fetchListOfContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
  notify,
  loading,
  lastError,
});

export default contactsReducer;
