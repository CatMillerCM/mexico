import PropTypes from 'prop-types';
import { Button } from '@/components/atoms/button';
import { DancingTacos } from '@/components/atoms/dancing-tacos';
import styles from './start.module.css';

const Start = ({ handleConfirm }) => {
  return (
    <>
      <h3>Welcome to</h3>
      <h1>TACO BUILDER</h1>
      <DancingTacos/>
      <div className={styles.intro}>
        <p>Inspired by the numerous taco stalls across Mexico, this mini project pays homage to all the various flavours across different states.</p>
        <p>Enjoy building up your favourite flavours, or try something new!</p>
      </div>
      <Button onClick={handleConfirm} label="Create my taco"/>
    </>
  )
};

Start.propTypes = {
  handleConfirm: PropTypes.func.isRequired
};

export { Start };