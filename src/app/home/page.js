import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
import { visitedCountries } from '../config';

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