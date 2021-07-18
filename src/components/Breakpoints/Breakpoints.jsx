import PropTypes from 'prop-types';
import styles from './Breakpoints.module.css';

const Breakpoints = ({ children }) => {
  return <div className={styles.Breakpoints}>{children}</div>;
};

Breakpoints.defaultProps = {};

Breakpoints.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Breakpoints;