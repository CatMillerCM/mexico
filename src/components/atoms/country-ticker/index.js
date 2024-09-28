import { countriesList } from '@/data';
import { currentCountry } from '@/app/config';
import styles from './country-ticker.module.css';

const CountryTicker = () => {
  const getRandomCountries = (max, quantity) => {
    const arr = [];

    while (arr.length < quantity) {
      const index = Math.floor(Math.random() * max);
      const country = countriesList[index];
      if (!arr.includes(country) && country !== currentCountry) {
        arr.push(country);
      }
    }

    return arr;
  }

  const countryTicker = () => {
    const randomCountries = getRandomCountries(countriesList.length - 1, 25);
    randomCountries.push(currentCountry);

    return randomCountries;
  };

  return (
    <div className={styles.countryTicker}>
      <div className={styles.countryList}>
        {countryTicker().map((country) => (
          <p key={country}>{country}</p>)
        )}
      </div>
    </div>
  )
};

export { CountryTicker };