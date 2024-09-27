import { Header } from '@/components/organisms/header';
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
    </main>
  );
};

export default Page;