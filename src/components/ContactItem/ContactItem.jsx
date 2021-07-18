import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete, cssRef }) => {
  return (
    <li className={styles.item} ref={cssRef}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.phone}>{number}</p>
      <button className={styles.button} onClick={onDelete}>
        &#9587;
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
