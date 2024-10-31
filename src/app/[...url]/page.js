import NotReady from '@/app/not-ready';
import NotFound from '@/app/not-found';
import { Nav } from '@/components/molecules/nav';
import { Header } from '@/components/organisms/header';
import { Blog } from '@/components/organisms/blog';
import { projects } from '@/data/projects';
import { allCountries } from '@/data';
import styles from './project-page.module.css';

const Page = ({ params: { url } }) => {
  const countryName = url[0].replace(/-/g, ' ');
  const countryIsValid = allCountries.includes(countryName);
  const project = projects[countryName];

  return (
    <main className={styles.page}>
      <Nav
        pageNames={[ "home", "about" ]}
      />
      <Header 
        countryName={countryIsValid ? countryName: 'Uh Oh!'}
      />
      {project
      ? <Blog 
        project={project}
      />
      : countryIsValid ? <NotReady /> : <NotFound />
      }
    </main>
  );
};

export default Page;