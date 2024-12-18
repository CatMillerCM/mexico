import PropTypes from 'prop-types';
import { DancingTacos } from '@/components/atoms/dancing-tacos';
import { SubmitButton } from '@/components/atoms/submit-button';
import styles from './start.module.css';

const Start = ({ handleConfirm }) => {
  return (
    <>
      <h3 className={styles.welcome}>Welcome to</h3>
      <h1 className={styles.title}>BIT-BY-BIT TACO BUILDER</h1>
      <DancingTacos/>
      <div className={styles.intro}>
        <p>Inspired by the numerous taco stalls we came across around México, this 8-bit style mini project pays homage to all the various flavours found in different states.</p>
        <p>Enjoy building up your favourite flavours, or try something new!</p>
      </div>
      <SubmitButton onClick={handleConfirm} label="Create my taco"/>
    </>
  )
};

Start.propTypes = {
  handleConfirm: PropTypes.func.isRequired
};

export { Start };