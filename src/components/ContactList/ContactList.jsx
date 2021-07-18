import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ items }) => {
  if (!items.length) {
    return null;
  }
  return (
    <section className={styles.ContactsList}>
      <h2 className={styles.ContactsList__title}>Contacts</h2>
      <ul className={styles.ContactsList__list}>
        {items.map(({ id }) => {
          return <ContactItem id={id} key={id} />;
        })}
      </ul>
    </section>
  );
};

ContactList.defaultProps = { items: [] };

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const filterContacts = (items, filter) => {
  const search = filter.trim().toLowerCase();
  if (filter) {
    return items.filter(({ name }) => name.toLowerCase().indexOf(search) >= 0);
  }
  return [...items];
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  return { items: filterContacts(items, filter) };
};

export default connect(mapStateToProps, null)(ContactList);