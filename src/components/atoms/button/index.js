import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, label, disabled = false }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>{label}</button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export { Button };