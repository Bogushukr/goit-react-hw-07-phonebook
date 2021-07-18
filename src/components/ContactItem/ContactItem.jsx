import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

import * as actions from 'redux/contacts/contacts-actions';

const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li className={styles.item}>
      <section className={styles.information}>
        <h3 className={styles.name}>{`Name: ${name}`}</h3>
        <p className={styles.phone}>{`Phone: ${number}`}</p>
      </section>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const { id: contactId } = props;
  const contact = state.contacts.items.find(({ id }) => id === contactId);
  return { contact };
};

const mapDispatchToProps = dispatch => ({
  onDelete: value => dispatch(actions.deleteContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);