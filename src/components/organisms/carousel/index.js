'use client'

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Card } from '@/components/molecules/card';
import { visitedCountries } from '../../../app/config';
import styles from './carousel.module.css';

const MIN_CAROUSEL_NUMBER = 5;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countries, setCountries] = useState(visitedCountries);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const padOutCountries = (length) => {
    const numberToPad = MIN_CAROUSEL_NUMBER - length;

    setCountries([...visitedCountries, ...Array(numberToPad).fill('placeholder')]);
  }

  useEffect(() => {
    if (visitedCountries.length < 5) {
      padOutCountries(visitedCountries.length)
    }
  }, []);

  return (
    countries.length >= 5 && <div className={styles.carousel}>
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
                    : ''
            }`}
          key={countryName}
          onClick={() => handleClick(index)}
        >
          {console.log(countryName, "<<<inside card")}
          <Card countryName={countryName} />
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  countries: PropTypes.array.isRequired,
};

export { Carousel };