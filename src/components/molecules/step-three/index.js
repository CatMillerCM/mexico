import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../steps.module.css';

const StepThree = ({ setStepThreeChoice }) => {
  return (
    <div className={styles.main}>
      <div className={styles.titles}>
        <h2>Step 3</h2>
        <h3>Vegetable Layer</h3>
        <h4>Choose your vegetable:</h4>
      </div>
      <div className={styles.choices}>
        <button type="button" onClick={() => setStepThreeChoice('Cabbage')}>Cabbage</button>
        <button type="button" onClick={() => setStepThreeChoice('Coriander')}>Coriander</button>
      </div>
    </div>
  )
};

StepThree.propTypes = {
  setStepTwoChoice: PropTypes.func.isRequired,
};

export { StepThree };