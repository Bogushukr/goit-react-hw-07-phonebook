import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <section className={styles.Filter}>
      <div className={styles.Filter__label}>
        <span>Find contacts by name</span>
        <input
          className={styles.Filter__input}
          type="text"
          name="filter"
          onChange={onChange}
          value={filter}
          placeholder="Search people"
        />
      </div>
    </section>
  );
};

Filter.defaultProps = { filter: '' };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
