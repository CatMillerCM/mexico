import PropTypes from 'prop-types';
import { Taco } from '@/components/atoms/taco';
import { Button } from '@/components/atoms/button';
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
      <Button onClick={handleNewTaco} label="Make another one!" />
    </>
  )
};

Finish.propTypes = {
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired
};

export { Finish };