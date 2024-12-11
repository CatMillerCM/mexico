'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { StepTitles } from '@/components/atoms/step-titles';
import { ChoiceInfo } from '@/components/molecules/choice-info';
import styles from './choices-layer.module.css';


// to do - move choices button to atom
// to do - if none is picked, untick everything
const Layer = ({ layer, step, choices, chosen, setChosen, setDisableConfirm, multiple }) => {
  const [chosenChoices, setChosenChoices] = useState([]);

  const handleChoice = (choice) => {
    // TODO: tidy this up
    let newLayer = chosenChoices;g

    if (choice === 'Ninguno') {
      if (chosenChoices.includes(choice)) {
        setChosenChoices([]);
        newLayer = [];
      } else {
        setChosenChoices([choice]);
        newLayer = [choice];
      }
    } else {
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
          if (chosenChoices.includes ('Ninguno')) {
            setChosenChoices([choice]);
            newLayer = [choice];
          } else {
            setChosenChoices([...chosenChoices, choice]);
            newLayer = [...chosenChoices, choice];
          }
        } else {
          setChosenChoices([choice]);
          newLayer = [choice];
        }
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
          <div key={choice.spanish} className={styles.choice}>
            <button type="button" className={`${styles.choiceButton} ${chosenChoices.includes(choice.spanish) ? styles.chosen : ''}`} onClick={() => handleChoice(choice.spanish)}>
              {choice.spanish}
              {choice.english}
            </button>
            {choice.info && <ChoiceInfo info={choice.info}/>}
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