'use client';

import { currentCountry, allCountries } from '@/data';
import { useEffect, useState } from 'react';
import styles from './country-ticker.module.css';

const CountryTicker = () => {
  const [tickerCountries, setTickerCountries] = useState([]);

  const getRandomCountries = (max, quantity) => {
    const arr = [];

    while (arr.length < quantity) {
      const index = Math.floor(Math.random() * max);
      const country = allCountries[index];
      if (!arr.includes(country) && country !== currentCountry) {
        arr.push(country);
      }
    }

    return arr;
  }

  useEffect(() => {
    const randomCountries = getRandomCountries(allCountries.length - 1, 25);
    randomCountries.push(currentCountry);

    setTickerCountries(randomCountries);
  }, []);

  if (tickerCountries.length === 0) {
    return null;
  }

  return (
    <div className={styles.countryTicker}>
      <div className={styles.countryList}>
        {tickerCountries.map((country) => (
          <p key={country}>{country}</p>)
        )}
      </div>
    </div>
  )
};

export { CountryTicker };