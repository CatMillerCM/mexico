import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../steps.module.css';

const StepOne = ({ setStepOneChoice }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <h2>Step 1</h2>
        <h3>Base Layer</h3>
        <h4>Choose your base:</h4>
      </div>
      <div className={styles.choices}>
        <button type="button" onClick={() => setStepOneChoice('soft')}>Choice 1: Soft</button>
        <button type="button" onClick={() => setStepOneChoice('hard')}>Choice 2: Hard</button>
      </div>
    </div>
  )
};

StepOne.propTypes = {
  setStepOneChoice: PropTypes.func.isRequired,
};

export { StepOne };