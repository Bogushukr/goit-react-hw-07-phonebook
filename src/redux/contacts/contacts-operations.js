import axios from 'axios';

import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchListOfContactsRequest,
  fetchListOfContactsSuccess,
  fetchListOfContactsError,
} from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchListOfContacts = () => async dispatch => {
  try {
    dispatch(fetchListOfContactsRequest());
    const { data } = await axios.get('/contacts');
    dispatch(fetchListOfContactsSuccess(data));
  } catch (error) {
    dispatch(fetchListOfContactsError(error.message));
  }
};

const addContact = (name, number) => async dispatch => {
  try {
    dispatch(addContactRequest());
    const { data } = await axios.post('/contacts', {
      name,
      number,
    });
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  try {
    dispatch(deleteContactRequest());
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
const contactsOperations = {
  fetchListOfContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
