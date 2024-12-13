import PropTypes from 'prop-types';
import styles from './step-titles.module.css';

const StepTitles = ({ layer, step, multiple }) => {
  return (
    <div className={styles.main}>
      <h4 className={styles.stepNumber}>Step {step}</h4>
      <h4 className={styles.layerName}>{layer} Layer</h4>
      <p className={styles.choose}>Choose one{multiple ? ' or more' : ''}:</p>
    </div>
  )
};

StepTitles.propTypes = {
  layer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  multiple: PropTypes.bool.isRequired
};

export { StepTitles };