import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

export const fetchListOfContactsRequest = createAction(
  types.FETCH_LIST_REQUEST,
);
export const fetchListOfContactsSuccess = createAction(
  types.FETCH_LIST_SUCCESS,
);
export const fetchListOfContactsError = createAction(types.FETCH_LIST_ERROR);

export const addContactRequest = createAction(types.ADD_REQUEST);
export const addContactSuccess = createAction(types.ADD_SUCCESS);
export const addContactError = createAction(types.ADD_ERROR);

export const deleteContactRequest = createAction(types.DELETE_REQUEST);
export const deleteContactSuccess = createAction(types.DELETE_SUCCESS);
export const deleteContactError = createAction(types.DELETE_ERROR);

export const setContactsFilter = createAction(types.FILTER);

export const showExistNotify = createAction(types.NOTIFY_EXIST);
