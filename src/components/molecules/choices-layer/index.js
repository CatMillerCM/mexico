import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './choices-layer.module.css';

const Layer = ({ layer, choices, chosen, setChosen, setDisableConfirm, multiple }) => {
  const handleChoice = (choice) => {
    // TODO: tidy this up
    let newLayer = chosen[layer];

    if (chosen[layer]?.includes(choice)) {
      if (multiple) {
        const indexOfRemovedChoice = chosen[layer]?.indexOf(choice);
        const clone = chosen[layer];
        clone.splice(indexOfRemovedChoice, 1);
        newLayer = clone;
      } else {
        newLayer = [];
      }
    } else {
      if (multiple && chosen[layer]?.length > 0) {
        newLayer = [...chosen[layer], choice];
      } else {
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
      <div className={styles.titles}>
        <h2>Step 3</h2>
        <h3>{layer} Layer</h3>
        <h4>Choose your {layer}:</h4>
      </div>
      <div className={styles.choices}>
      {choices.map((choice) => (
          <button type="button" key={choice} onClick={() => handleChoice(choice)}>{choice}</button>
        ))}
      </div>
    </div>
  )
};

Layer.propTypes = {
  layer: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  chosen: PropTypes.object.isRequired,
  setChosen: PropTypes.func.isRequired,
  setDisableConfirm: PropTypes.func.isRequired,
  multiple: PropTypes.bool
};

export { Layer };