import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
import { myCountries } from '@/data';
import styles from './home.module.css';

const Page = () => {
  return (
    <main className={styles.home}>
      <Nav
        pageNames={[ "about" ]}
      />
      <Header
        isHomeOrAboutPage
        isCountriesAnimated
      />
      <Carousel
        myCountries={myCountries}
        countries={visitedCountries}
      />
    </main>
  );
};

export default Page;