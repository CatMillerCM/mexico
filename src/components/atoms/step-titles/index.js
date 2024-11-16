import PropTypes from 'prop-types';
import styles from './step-titles.module.css';

const StepTitles = ({ layer, step }) => {
  return (
    <div className={styles.main}>
      <h2>Step {step}</h2>
      <h3>{layer} Layer</h3>
      <h4>Choose your {layer}:</h4>
    </div>
  )
};

StepTitles.propTypes = {
  layer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired
};

export { StepTitles };