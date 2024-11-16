'use client';

import { useState } from 'react';
import { StepOne } from '@/components/molecules/step-one';
import styles from './page.module.css';

const Page = () => {
  const [confirmedStep, setConfirmedStep] = useState(0);
  const [stepOneChoice, setStepOneChoice] = useState(null);

  const handleConfirm = () => {
    setConfirmedStep((prev) => prev++)
  };

  return (
    <main className={styles.main}>
      <div className={styles.steps}>
        <StepOne setStepOneChoice={setStepOneChoice}/>
      </div>
      <div className={styles.taco}>
        <p>{stepOneChoice}</p>
      </div>
      <div className={styles.confirm}>
        <button type="button" onClick={handleConfirm}>Confirm choice</button>
      </div>
    </main>
  );
}

export default Page;
