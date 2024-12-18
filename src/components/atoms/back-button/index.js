import PropTypes from 'prop-types';
import styles from './back-button.module.css';

const BackButton = ({ setStep, chosen, layer }) => {
  const handleBack = () => {
    setStep((prev) => --prev);

    delete chosen[layer];
  };

  return (
    <button type="button"  className={styles.button} onClick={handleBack}>Back</button>
  )
};

BackButton.propTypes = {
  setStep: PropTypes.func.isRequired,
  chosen: PropTypes.object.isRequired,
  layer: PropTypes.string.isRequired
};

export { BackButton };