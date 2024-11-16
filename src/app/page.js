'use client';

import { useState } from 'react';
import { Layer } from '@/components/molecules/choices-layer';
import layerChoices from '@/data/layer-choices';
import styles from './page.module.css';

const Page = () => {
  const [confirmedStep, setConfirmedStep] = useState(0);
  const [chosen, setChosen] = useState({});


  const handleConfirm = () => {
    setConfirmedStep((prev) => {
      console.log(prev, prev++, "<<<prev")
      return prev++}
    )
  };

  return (
    <main className={styles.main}>
      <div className={styles.steps}>
        {confirmedStep === 0 && <Layer layer="base" choices={layerChoices.base} chosen={chosen} setChosen={setChosen}/>}
        {confirmedStep === 1 && <Layer layer="protein" choices={layerChoices.protein} chosen={chosen} setChosen={setChosen}/>}
        {confirmedStep === 2 && <Layer layer="vegetable" choices={layerChoices.vegetable} chosen={chosen} setChosen={setChosen}/>}
      </div>
      <div className={styles.taco}>
        <p>{chosen.base}</p>
        <p>{chosen.protein}</p>
        <p>{chosen.vegetable}</p>
      </div>
      <div className={styles.confirm}>
        <button type="button" onClick={handleConfirm}>Confirm choice</button>
      </div>
    </main>
  );
}

export default Page;
