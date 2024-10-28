import { Nav } from '@/components/molecules/nav';
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
        isHomePage
        isCountriesAnimated
      />
      <Carousel
        myCountries={myCountries}
      />
    </main>
  );
};

export default Page;