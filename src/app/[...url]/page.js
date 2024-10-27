import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Blog } from '@/components/organisms/blog';
import { projects } from '@/data/projects';
import styles from './project-page.module.css';

const Page = ({ params: { url } }) => {
  const countryName = url[0].replace(/-/g, ' ');

  return (
    <main className={styles.page}>
      <Nav
        pageNames={[ "home", "about" ]}
      />
      <Header />
      <Blog 
        countryName={countryName}
        project={projects[countryName]}
      />
    </main>
  );
};

export default Page;