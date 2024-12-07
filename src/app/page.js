'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layer } from '@/components/organisms/choices-layer';
import { Button } from '@/components/atoms/button';
import { layerChoices } from '@/data/layer-choices';
import taco from '@/data/taco.jpg';
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

  if (step === 0) {
    return (
      <main className={styles.main}>
        <h2>Welcome to</h2>
        <h1>TACO BUILDER</h1>
        <p>Inspired by the numerous taco stalls across Mexico, this mini project pays homage to all the various flavours across different states.</p>
        <p>Enjoy building up your favourite flavours, or try something new!</p>
        <Button onClick={handleConfirm} label="Create my taco"/>
      </main>
    )
  }

  if (step === 5) {
    return (
      <main className={styles.main}>
        <h2>Taco complete!</h2>
        <p>[IMAGE OF FINILISED TACO]!</p>
        <p>I'm still hungry...</p>
        <Button onClick={handleNewTaco} label="Make another one!" />
      </main>
    )
  }

  return (
    <main className={styles.main}>
      {step === 1 && <Layer layer="base" step={step} choices={layerChoices.base} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      {step === 2 && <Layer layer="protein" step={step} choices={layerChoices.protein} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
      {step === 3 && <Layer layer="vegetable" step={step} choices={layerChoices.vegetable} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
      {step === 4 && <Layer layer="salsa" step={step} choices={layerChoices.salsa} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      <div className={styles.taco}>
        {/* <p>{chosen.base}</p>
        <p>{chosen.protein}</p>
        <p>{chosen.vegetable}</p>
        <p>{chosen.salsa}</p> */}
        <Image
          src={taco}
          alt="taco"
          unoptimized
        />
      </div>
      <Button onClick={handleConfirm} label="Confirm choice" disabled={disableConfirm}/>
    </main>
  );
}

export default Page;
