'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layer } from '@/components/organisms/choices-layer';
import { Button } from '@/components/atoms/button';
import { layerChoices, layerImages } from '@/data/layer-choices';
import taco from '@/assets/taco.png';
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

  // to do - extract and optimise taco images

  if (step === 0) {
    return (
      <main className={styles.main}>
        <h2>Welcome to</h2>
        <h1>TACO BUILDER</h1>
        <div className={styles.tacoImages}>
          <Image src={taco} alt="taco" unoptimized/>
          <Image src={taco} alt="taco" unoptimized/>
          <Image src={taco} alt="taco" unoptimized/>
        </div>
        <p>Inspired by the numerous taco stalls across Mexico, this mini project pays homage to all the various flavours across different states.</p>
        <p>Enjoy building up your favourite flavours, or try something new!</p>
        <Button onClick={handleConfirm} label="Create my taco"/>
      </main>
    )
  }

  if (step === 7) {
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
      {step === 2 && <Layer layer="protein" step={step} choices={layerChoices.protein} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      {step === 3 && <Layer layer="vegetables" step={step} choices={layerChoices.vegetables} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
      {step === 4 && <Layer layer="dairy" step={step} choices={layerChoices.dairy} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      {step === 5 && <Layer layer="garnishes" step={step} choices={layerChoices.garnishes} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
      {step === 6 && <Layer layer="sauces" step={step} choices={layerChoices.sauce} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
      <div className={styles.taco}>
        {Object.keys(chosen).map((key) => {
          return chosen[key] && chosen[key][0] !== 'Ninguno' && chosen[key].map((choice) => {
            console.log(chosen[key], choice, "<<<<")
            return (
              <Image
                src={layerImages[choice].src}
                alt={choice}
                layout="fill"
                unoptimized
              />
            )
          });
        })};
      </div>
      <Button onClick={handleConfirm} label="Confirm choice" disabled={disableConfirm}/>
    </main>
  );
}

export default Page;
