import PropTypes from 'prop-types';
import { ChoiceInfo } from '@/components/molecules/choice-info';
import styles from './choice-button.module.css';

const ChoiceButton = ({ layer, choice, chosen, handleChoice }) => {
  return (
    <div key={choice.spanish} className={styles.choice}>
      <button type="button" className={`${styles.choiceButton} ${chosen[layer]?.includes(choice.spanish) ? styles.chosen : ''}`} onClick={() => handleChoice(choice.spanish)}>
        <span className={styles.spanishText}>{choice.spanish}</span>
        <br/>
        <span className={styles.englishText}>{choice.english}</span>
        </button>
      {choice.info && <ChoiceInfo info={choice.info}/>}
    </div>
  )
};

ChoiceButton.propTypes = {
  layer: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  chosen: PropTypes.object.isRequired,
  handleChoice: PropTypes.func.isRequired
};

export { ChoiceButton };