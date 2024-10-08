'use client'

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card } from '@/components/molecules/card';
import styles from './carousel.module.css';

const Carousel = ({ countries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      {countries.map((countryName, index) => (
        <div
          className={`${styles.card} ${index === currentIndex
            ? styles.centerCard
            : index === (currentIndex + 1) % countries.length
              ? styles.rightCard
              : index === (currentIndex + 2) % countries.length
                ? styles.farRightCard
                : index === (currentIndex - 1 + countries.length) % countries.length
                  ? styles.leftCard
                  : (currentIndex - 2 + countries.length) % countries.length === index
                    ? styles.farLeftCard
                    : styles.hiddenCard
            }`}
          key={countryName}
          onClick={() => handleClick(index)}
        >
          <Card countryName={countryName} isCentreCard={index === currentIndex} />
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  countries: PropTypes.array.isRequired,
};

export { Carousel };