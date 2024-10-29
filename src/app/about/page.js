import Image from 'next/image';
import { Nav } from '@/components/molecules/nav';
import { Header } from '@/components/organisms/header';
import { Socials } from '@/components/molecules/socials';
import { catMiller } from '@/data/assets/nav';
import styles from './about.module.css';

const Page = () => {
  return (
    <main className={styles.about}>
      <Nav
        pageNames={["home"]}
      />
      <Header
        isAboutPage
      />
      <h1>About</h1>
      <div className={styles.content}>
        <h3>Hey there!</h3>
        <p>I’m Cat, a 29-year-old software engineer from the UK, <br></br>
          and I’m fortunate enough to currently be travelling Latin America.</p>
        <div className={styles.image}>
          <Image
            src={catMiller}
            alt='Image of Cat Miller'
            priority={true}
          />
        </div>
        <p>Having a passion for coding, I’m keen to keep up and expand my skills while I’m on the road and soaking up new experiences.</p>
        <p>This is why I’ve built <span className={styles.span}>What’s My Country Code?</span>.</p>
        <p>I’m challenging myself to create a fun, novelty project inspired by each country I visit, and this website will be my creative playground.</p>
        <p>My mini app could be based around culture, food, locations, the people I meet, or my own adventures. <br></br>
          Each one will be a little piece of my journey!</p>
        <p>When I’ve completed a country (both geographically and technologically!), I’ll upload it to the respective country carousel card and page. <br></br>
          In addition to hosting the app so you can have a real play, I’ll also share some of my highlights from that location, my key inspirations, and, if you’re lucky, some photos as well!</p>
        <p>I hope you all enjoy my silly creations likely conjured up in airport gates, ferry terminals, hostel rooms, on overnight bus journeys, and maybe even when swinging in a tranquil hammock on a beach…</p>
        <p>If you have any ideas or improvements for <span className={styles.span}>What’s My Country Code?</span> and its spawns, or simply want to connect, please do reach out on any of the below! <br></br>
          You can also browse all of the country codes on my Github.</p>
        <Socials />
        <p>Or, if you’re lucky enough to be my pal, pop me a WhatsApp of course!</p>
        <p>Thanks so much for coming on this journey with me! <br></br>
          Follow along to see where I go next!</p>
      </div>
    </main>
  );
};

export default Page;
