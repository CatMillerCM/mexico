import PropTypes from 'prop-types';
import styles from './step-titles.module.css';

const StepTitles = ({ layer, step }) => {
  return (
    <div className={styles.main}>
      <h3>Step {step}</h3>
      <h4>{layer} Layer</h4>
      <p>Choose your {layer}:</p>
    </div>
  )
};

StepTitles.propTypes = {
  layer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired
};

export { StepTitles };