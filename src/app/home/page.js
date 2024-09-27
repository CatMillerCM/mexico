import { countries } from './countries';
import styles from './home.module.css';

const CURRENT_COUNTRY = 'Mexico';

const Page = () => {
  const getRandomCountries = (max, quantity) => {
    const arr = [];

    while (arr.length < quantity) {
      const index = Math.floor(Math.random() * max);
      const country = countries[index];
      if (!arr.includes(country) && country !== CURRENT_COUNTRY) {
        arr.push(country);
      }
    }

    return arr;
  }

  const countryTicker = () => {
    const randomCountries = getRandomCountries(countries.length - 1, 25);
    randomCountries.push(CURRENT_COUNTRY);

    return randomCountries;
  };


  return (
    <main className={styles.home}>
      <div className={styles.header}>
        <h2>LOGO HERE</h2>
        <div className={styles.location}>
          <p>I am currently in</p>
          <div className={styles.countryTicker}>
            <div className={styles.countryList}>
              {countryTicker().map((country) => (
                <p key={country}>{country}</p>)
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;