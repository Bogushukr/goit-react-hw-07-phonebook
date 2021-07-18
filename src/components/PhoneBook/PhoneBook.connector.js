import { connect } from 'react-redux';

import PhoneBook from './PhoneBook';

import { contactsOperations } from 'redux/contacts';

const mapDispatchToProps = dispatch => ({
  contactsFetch: () => dispatch(contactsOperations.fetchListOfContacts()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);
