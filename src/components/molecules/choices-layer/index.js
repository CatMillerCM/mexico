import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './choices-layer.module.css';

const Layer = ({ layer, choices, chosen, setChosen, multiple }) => {
  const handleChoice = (choice) => {
    const newLayer = multiple ? [chosen[layer], ...choice] : choice;
    setChosen({...chosen, [layer]: newLayer});
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
  multiple: PropTypes.bool
};

export { Layer };