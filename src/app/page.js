'use client';

import { useState } from 'react';
import { Layer } from '@/components/organisms/choices-layer';
import { SubmitButton } from '@/components/atoms/submit-button';
import { Taco } from '@/components/atoms/taco';
import { layerChoices, multipleOptionLayers } from '@/data/layer-choices';
import styles from './page.module.css';
import { Finish } from '@/components/organisms/finish';
import { Start } from '@/components/organisms/start';

const Page = () => {
  const [step, setStep] = useState(0);
  const [disableConfirm, setDisableConfirm] = useState(true);
  const [chosen, setChosen] = useState({});

  const handleConfirm = () => {
    setStep((prev) => {
      prev++;
      return prev++;
    });
    setDisableConfirm(true);
  };

  if (step === 0) {
    return (
      <main className={styles.main}>
        <Start handleConfirm={handleConfirm}/>
      </main>
    )
  }

  if (step === 7) {
    return (
      <main className={styles.main}>
        <Finish chosen={chosen} setChosen={setChosen} setStep={setStep}/>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      {Object.keys(layerChoices).map((layerName, index) => {
        return step === index + 1 && (
          <Layer layer={layerName} step={step} setStep={setStep} choices={layerChoices[layerName]} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple={multipleOptionLayers.includes(layerName)}/>
        )
      })}
      <Taco chosen={chosen}/>
      <div>
        <SubmitButton onClick={handleConfirm} label="Confirm choice" disabled={disableConfirm}/>
      </div>
    </main>
  );
}

export default Page;
