import PropTypes from 'prop-types';
import { currentCountry } from '@/app/config';
import { CountryTicker } from '@/components/atoms/country-ticker';
import styles from './location.module.css';

const Location = ({ isCountriesAnimated = false }) => {
  return (
    <div className={styles.location}>
      <p>I am currently in</p>
      {isCountriesAnimated ? <CountryTicker /> : <p className={styles.currentCountry}>{currentCountry}</p>}
    </div>
  )
};

Location.propTypes = {
  isCountriesAnimated: PropTypes.bool,
};

export { Location };