import { Header } from '@/components/organisms/header';
import styles from './about.module.css';

const Page = () => {
  return (
    <main className={styles.about}>
      <Header />
      <div>
        <p>ABOUT</p>
      </div>
    </main>
  );
};

export default Page;