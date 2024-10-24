'use client'

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Card } from '@/components/molecules/card';
import styles from './carousel.module.css';

const Carousel = ({ myCountries, setCentreCard }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % myCountries.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + myCountries.length) % myCountries.length),
    preventScrollOnSwipe: true
  });

  const getClassname = (index) => {
    if (index === currentIndex) return styles.centerCard;
    if (index === (currentIndex + 1) % myCountries.length) return styles.rightCard;
    if (index === (currentIndex + 2) % myCountries.length) return styles.farRightCard;
    if (index === (currentIndex - 1 + myCountries.length) % myCountries.length) return styles.leftCard;
    if (index === (currentIndex - 2 + myCountries.length) % myCountries.length) return styles.farLeftCard;

    return styles.hiddenCard;
  }

  return (
    <div className={styles.carousel} {...handlers} >
      {myCountries.map((countryName, index) => (
        <div
          className={`${styles.card} ${getClassname(index)}`}
          key={countryName}
          onClick={() => handleClick(index)}
        >
          <Card countryName={countryName} isCentreCard={index === currentIndex} setCentreCard={setCentreCard}/>
        </div>
      ))}
    </div>
  );
};

Carousel.propTypes = {
  myCountries: PropTypes.array.isRequired,
  setCentreCard: PropTypes.func.isRequired
};

export { Carousel };