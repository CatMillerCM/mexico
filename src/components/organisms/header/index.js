import PropTypes from 'prop-types';
import { Location } from '@/components/molecules/location';
import { Nav } from '@/components/molecules/nav';
import styles from './header.module.css';

const Header = ({ isCountriesAnimated }) => {
  return (
    <div className={styles.header}>
      <h2>LOGO HERE</h2>
      <Location
        isCountriesAnimated={isCountriesAnimated}
      />
      <Nav />
    </div>
  )
};

Location.propTypes = {
  isCountriesAnimated: PropTypes.bool,
};

export { Header };