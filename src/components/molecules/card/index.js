import PropTypes from 'prop-types';
import Image from 'next/image';
import { countryCoverPhotos } from '../../../data/country-cover-photos/index';
import styles from './card.module.css';

const Card = ({ countryName }) => {
  return (
    <div className={styles.card} >
      <div className={styles.image}>
        <Image
          src={countryCoverPhotos[countryName]}
          alt={`Cover image of ${countryName}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className={styles.title}>{countryName}</h2>
      <div className={styles.turnUp}></div>
    </div >
  )
};

Card.propTypes = {
  countryName: PropTypes.string.isRequired
};

export { Card };