import { Header } from '@/components/organisms/header';
import styles from './contact.module.css';

const Page = () => {
  return (
    <main className={styles.contact}>
      <Header />
      <div>
        <p>CONTACT</p>
      </div>
    </main>
  );
};

export default Page;