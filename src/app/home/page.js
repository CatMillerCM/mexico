import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
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
      <Carousel />
    </main>
  );
};

export default Page;