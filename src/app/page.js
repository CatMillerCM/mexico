'use client';

import { useState } from 'react';
import { Layer } from '@/components/molecules/choices-layer';
import layerChoices from '@/data/layer-choices';
import styles from './page.module.css';

const Page = () => {
  const [confirmedStep, setConfirmedStep] = useState(0);
  const [disableConfirm, setDisableConfirm] = useState(true);
  const [chosen, setChosen] = useState({});

  const handleConfirm = () => {
    setConfirmedStep((prev) => {
      console.log(prev, prev++, "<<<prev")
      return prev++}
    )
    setDisableConfirm(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.steps}>
        {confirmedStep === 0 && <Layer layer="base" choices={layerChoices.base} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
        {confirmedStep === 1 && <Layer layer="protein" choices={layerChoices.protein} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
        {confirmedStep === 2 && <Layer layer="vegetable" choices={layerChoices.vegetable} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm} multiple/>}
        {confirmedStep === 3 && <Layer layer="salsa" choices={layerChoices.salsa} chosen={chosen} setChosen={setChosen} setDisableConfirm={setDisableConfirm}/>}
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
    </main>
  );
}

export default Page;
