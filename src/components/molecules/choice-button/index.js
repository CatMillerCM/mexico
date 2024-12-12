import PropTypes from 'prop-types';
import { ChoiceInfo } from '@/components/molecules/choice-info';
import styles from './choice-button.module.css';

const ChoiceButton = ({ choice, chosenChoices, handleChoice }) => {
  return (
    <div key={choice.spanish} className={styles.choice}>
      <button type="button" className={`${styles.choiceButton} ${chosenChoices.includes(choice.spanish) ? styles.chosen : ''}`} onClick={() => handleChoice(choice.spanish)}>
        <span className={styles.spanishText}>{choice.spanish}</span>
        <br/>
        <span className={styles.englishText}>{choice.english}</span>
        </button>
      {choice.info && <ChoiceInfo info={choice.info}/>}
    </div>
  )
};

ChoiceButton.propTypes = {
  choice: PropTypes.string.isRequired,
  chosenChoices: PropTypes.array.isRequired,
  handleChoice: PropTypes.func.isRequired
};

export { ChoiceButton };