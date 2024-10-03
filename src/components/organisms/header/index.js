import PropTypes from 'prop-types';
import { Location } from '@/components/molecules/location';
import { Socials } from '@/components/molecules/socials';
import styles from './header.module.css';

const Header = ({ isHomeOrAboutPage, isCountriesAnimated }) => {
  return (
    <div className={styles.header}>
      <h2>LOGO HERE</h2>
      {isHomeOrAboutPage && <Location
        isCountriesAnimated={isCountriesAnimated}
      />}
      <Socials/>
    </div>
  )
};

Location.propTypes = {
  isHomeOrAboutPage: PropTypes.bool,
  isCountriesAnimated: PropTypes.bool,
};

export { Header };