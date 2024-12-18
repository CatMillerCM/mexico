'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { BackButton } from '@/components/atoms/back-button';
import { StepTitles } from '@/components/atoms/step-titles';
import { ChoiceButton } from '@/components/molecules/choice-button';
import styles from './choices-layer.module.css';

const Layer = ({ layer, step, setStep, choices, chosen, setChosen, setDisableConfirm, multiple }) => {
  const [chosenChoices, setChosenChoices] = useState([]);

  const handleChoice = (choice) => {
    let newLayer = chosenChoices;

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
      <BackButton setStep={setStep} chosen={chosen} layer={layer}/>
      <StepTitles layer={layer} step={step} multiple={multiple}/>
      <div className={`${styles.choices} ${choices.length < 4 ? styles.stacked : ''}`}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} layer={layer} choice={choice} chosen={chosen} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  )
};

Layer.propTypes = {
  layer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setDisableConfirm: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export { Layer };