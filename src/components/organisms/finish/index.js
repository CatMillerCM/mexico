import PropTypes from 'prop-types';
import { Taco } from '@/components/atoms/taco';
import { SubmitButton } from '@/components/atoms/submit-button';
import styles from './finish.module.css';

const Finish = ({ chosen, setChosen, setStep }) => {
  const handleNewTaco = () => {
    setChosen({});
    setStep(0);
  }

  return (
    <>
      <h2 className={styles.complete}>Taco complete!</h2>
      <Taco chosen={chosen} isFinal/>
      <p className={styles.hungry}>I'm still hungry...</p>
      <SubmitButton onClick={handleNewTaco} label="Make another one!" />
    </>
  )
};

Finish.propTypes = {
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export { Finish };