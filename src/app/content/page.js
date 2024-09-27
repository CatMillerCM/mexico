import { Header } from '@/components/organisms/header';
import styles from './content.module.css';

const Page = () => {
  return (
    <main className={styles.content}>
      <Header />
      <div>
        <p>CONTENT</p>
      </div>
    </main>
  );
};

export default Page;