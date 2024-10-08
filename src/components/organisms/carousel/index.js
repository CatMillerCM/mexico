'use client'

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Card } from '@/components/molecules/card';
import styles from './carousel.module.css';

const Carousel = ({ countries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length),
    preventScrollOnSwipe: true
  });

  return (
    <div className={styles.carousel} {...handlers} >
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