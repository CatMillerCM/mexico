import PropTypes from 'prop-types';
import styles from './submit-button.module.css';

const SubmitButton = ({ onClick, label, disabled = false }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>{label}</button>
  )
};

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export { SubmitButton };