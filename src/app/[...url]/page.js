import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Blog } from '@/components/organisms/blog';
import styles from './project-page.module.css';

const Page = ({ params: { url } }) => {
  return (
    <main>
      <Header />
      <Nav
        pageName="home"
      />
      <Blog 
        countryName={url[0].replace(/-/g, ' ')}
      />
    </main>
  );
};

export default Page;