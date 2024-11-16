'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';
import { StepTitles } from '@/components/atoms/step-titles';
import { layerInfo } from '@/data/layer-choices';
import styles from './choices-layer.module.css';

const Layer = ({ layer, step, choices, chosen, setChosen, setDisableConfirm, multiple }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [chosenChoices, setChosenChoices] = useState([]);

  const handleChoice = (choice) => {
    // TODO: tidy this up
    let newLayer = chosenChoices;

    if (chosenChoices.includes(choice)) {
      if (multiple) {
        const indexOfRemovedChoice = chosenChoices.indexOf(choice);
        const clone = chosenChoices;
        clone.splice(indexOfRemovedChoice, 1);
        setChosenChoices(clone);
        newLayer = clone;
      } else {
        setChosenChoices([]);
        newLayer = [];
      }
    } else {
      if (multiple && chosenChoices?.length > 0) {
        setChosenChoices([...chosenChoices, choice]);
        newLayer = [...chosenChoices, choice];
      } else {
        setChosenChoices([choice]);
        newLayer = [choice];
      }
    }

    setChosen({...chosen, [layer]: newLayer});
    
    if (newLayer.length > 0) {
      setDisableConfirm(false);
    } else {
      setDisableConfirm(true);
    }
  };

  return (
    <div className={styles.main}>
      <StepTitles layer={layer} step={step}/>
      <div className={styles.choices}>
        {choices.map((choice) => (
          <div key={choice} className={styles.choice}>
            <button type="button" className={`${styles.choiceButton} ${chosenChoices.includes(choice) ? styles.chosen : ''}`} onClick={() => handleChoice(choice)}>{choice}</button>
            <div className={styles.info}>
              {Object.keys(layerInfo).includes(choice) && showInfo &&
                <div className={styles.infoBox}>
                  <button type="button" className={styles.close} onClick={() => setShowInfo(false)}>X</button>
                  <p className={styles.infoText}>{layerInfo[choice]}</p>
                </div>
              }
              {Object.keys(layerInfo).includes(choice) && <button type="button" className={styles.questionMark} onClick={() => setShowInfo(true)}>?</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

Layer.propTypes = {
  layer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  choices: PropTypes.array.isRequired,
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setDisableConfirm: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export { Layer };