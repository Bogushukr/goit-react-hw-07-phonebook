import { connect } from 'react-redux';
import ContactFormH from './ContactFormH';

import { showExistNotify } from 'redux/contacts/contacts-actions';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const mapStateToProps = state => ({
  items: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
  setNotify: value => dispatch(showExistNotify(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormH);