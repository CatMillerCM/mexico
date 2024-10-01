import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { countryCoverPhotos } from '@/data/country-cover-photos/index';
import { countryProjectPhotos } from '@/data/country-project-photos';
import styles from './card.module.css';

const Card = ({ countryName, isCentreCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.isFlipped : ''}`}
      onClick={handleCardClick}
    >
      <div className={`${styles.frontCard} ${isCentreCard ? styles.center : ''}`}>
        <div className={styles.frontImage}>
          <Image
            src={countryCoverPhotos[countryName]}
            alt={`Cover image of ${countryName}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className={styles.frontTitle}>{countryName}</h2>
        {countryName !== 'united kingdom' && (
          <p className={styles.comingSoon}>Coming soon!</p>
        )}
        <div className={styles.turnUp}></div>
      </div>
      <Link href={`/${countryName.replace(/\s+/g, '-')}`}>
        <div className={styles.backCard}>
          <h3 className={styles.backTitle}>{countryName}</h3>
          <h2 className={styles.projectTitle}>Project Title</h2>
          <div className={styles.backImage}>
            <Image
              src={countryProjectPhotos[countryName]}
              alt={`Project image for ${countryName}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p className={styles.readMore}>Read more</p>
        </div>
      </Link>
    </div >
  );
};


Card.propTypes = {
  countryName: PropTypes.string.isRequired,
  isCentreCard: PropTypes.bool.isRequired
};

export { Card };