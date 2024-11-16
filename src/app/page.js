'use client';

import { useState } from 'react';
import { Layer } from '@/components/organisms/choices-layer';
import { layerChoices } from '@/data/layer-choices';
import styles from './page.module.css';

const Page = () => {
  const [step, setStep] = useState(0);
  const [disableConfirm, setDisableConfirm] = useState(true);
  const [chosen, setChosen] = useState({});

  const handleConfirm = () => {
    setStep((prev) => {
      console.log(prev, prev++, "<<<prev")
      return prev++}
    )
    setDisableConfirm(true);
  };

  const handleNewTaco = () => {
    setChosen({});
    setStep(0);
  }

  return (
    <main className={styles.main}>
      {step === 0 &&
      <div className={styles.entry}>
        <h2>Welcome to</h2>
        <h1>TACO BUILDER</h1>
        <p>Inspired by the numerous taco stalls across Mexico, this mini project pays homage to all the various flavours across different states.</p>
        <p>Enjoy building up your favourite flavours, or try something new!</p>
        <button type="button" onClick={handleConfirm}>Create my taco!</button>
      </div>
      }
      <div className={styles.steps}>
        {step === 1 && <Layer layer="base" step={step} choices={layerChoices.base} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
        {step === 2 && <Layer layer="protein" step={step} choices={layerChoices.protein} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
        {step === 3 && <Layer layer="vegetable" step={step} choices={layerChoices.vegetable} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
        {step === 4 && <Layer layer="salsa" step={step} choices={layerChoices.salsa} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      </div>
      <div className={styles.taco}>
        <p>{chosen.base}</p>
        <p>{chosen.protein}</p>
        <p>{chosen.vegetable}</p>
        <p>{chosen.salsa}</p>
      </div>
      <div className={styles.confirm}>
        <button type="button" onClick={handleConfirm} disabled={disableConfirm}>Confirm choice</button>
      </div>
      {step === 5 &&
      <div className={styles.finish}>
        <h2>Taco complete!</h2>
        <p>[IMAGE OF FINILISED TACO]!</p>
        <button type="button" onClick={handleNewTaco}>I'm still hungry... make another one!</button>
      </div>
      }
    </main>
  );
}

export default Page;
