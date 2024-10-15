import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
import { visitedCountries } from '@/data';
import styles from './home.module.css';

const Page = () => {
  return (
    <main>
      <Header
        isHomeOrAboutPage
        isCountriesAnimated
      />
      <Nav
        pageName="about"
      />
      <Carousel
        countries={visitedCountries}
      />
    </main>
  );
};

export default Page;