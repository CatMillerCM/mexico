import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../steps.module.css';

const StepTwo = ({ setStepTwoChoice }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <h2>Step 2</h2>
        <h3>Protein Layer</h3>
        <h4>Choose your protein:</h4>
      </div>
      <div className={styles.choices}>
        <button type="button" onClick={() => setStepTwoChoice('Chorizo')}>Chorizo</button>
        <button type="button" onClick={() => setStepTwoChoice('Alambre')}>Alambre</button>
        <button type="button" onClick={() => setStepTwoChoice('Al Pastor')}>Al Pastor</button>
        <button type="button" onClick={() => setStepTwoChoice('Steak')}>Steak</button>
      </div>
    </div>
  )
};

StepTwo.propTypes = {
  setStepTwoChoice: PropTypes.func.isRequired,
};

export { StepTwo };