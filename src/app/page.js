'use client';

import { useState } from 'react';
import { StepOne } from '@/components/molecules/step-one';
import { StepTwo } from '@/components/molecules/step-two';
import { StepThree } from '@/components/molecules/step-three';
import styles from './page.module.css';

const Page = () => {
  const [confirmedStep, setConfirmedStep] = useState(0);
  // could this be an array of choices? or an object to save sep states?
  const [stepOneChoice, setStepOneChoice] = useState(null);
  const [stepTwoChoice, setStepTwoChoice] = useState(null);
  const [stepThreeChoice, setStepThreeChoice] = useState(null);


  const handleConfirm = () => {
    setConfirmedStep((prev) => {
      console.log(prev, prev++, "<<<prev")
      return prev++}
    )
  };

  return (
    <main className={styles.main}>
      <div className={styles.steps}>
        {confirmedStep === 0 && <StepOne setStepOneChoice={setStepOneChoice}/>}
        {confirmedStep === 1 && <StepTwo setStepTwoChoice={setStepTwoChoice}/>}
        {confirmedStep === 2 && <StepThree setStepThreeChoice={setStepThreeChoice}/>}
      </div>
      <div className={styles.taco}>
        <p>{stepOneChoice}</p>
        <p>{stepTwoChoice}</p>
        <p>{stepThreeChoice}</p>
      </div>
      <div className={styles.confirm}>
        <button type="button" onClick={handleConfirm}>Confirm choice</button>
      </div>
    </main>
  );
}

export default Page;
