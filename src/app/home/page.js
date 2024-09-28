import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
import { visitedCountries } from '../config';
import styles from './home.module.css';

const Page = () => {
  return (
    <main className={styles.home}>
      <Header
        isCountriesAnimated
      />
      <div>
        <p>HOME</p>
      </div>
      <Carousel
        countries={visitedCountries}
      />
    </main>
  );
};

export default Page;