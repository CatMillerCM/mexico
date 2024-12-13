import PropTypes from 'prop-types';
import Image from 'next/image';
import { Taco } from '@/components/atoms/taco';
import { SubmitButton } from '@/components/atoms/submit-button';
import { lime } from '@/assets';
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
        <div className={styles.lime}>
          <Image src={lime} alt="lime" unoptimized/>
        </div>
      <p className={styles.hungry}>I&apos;m still hungry...</p>
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