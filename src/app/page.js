'use client';

import Script from 'next/script';
import { Plane } from '@/components/atoms/plane';
import { Nav } from '@/components/atoms/nav';
import { Header } from '@/components/organisms/header';
import { Carousel } from '@/components/organisms/carousel';
import { visitedCountries } from '@/data';
import styles from './entry.module.css';

const Entry = () => {
  const initPlanet = () => {
    const planet = planetaryjs.planet();

    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'https://unpkg.com/world-atlas@1.1.4/world/110m.json' },
      oceans: { fill: 'cadetblue' },
      land: { fill: 'wheat' },
      borders: { stroke: 'wheat' }
    }));

    planet.projection.scale(100).translate([125, 125]);
    const canvas = document.getElementById('globe');

    planet.onDraw(() => {
      planet.projection.rotate([Date.now() / 30, -20])
    });

    planet.draw(canvas);
  };

  return (
    <main className={styles.main}>
      <Script src="https://d3js.org/d3.v3.min.js" />
      <Script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js" />
      <Script src="/js/planetaryjs.min.js" onLoad={initPlanet} />
      <div className={styles.content}>
        <Plane />
        <div className={styles.sections}>
          <section className={styles.entry}>
            <canvas id="globe" width="250" height="250"></canvas>
            <div className={styles.logo}>
              <h2>what's my</h2>
              <h1>#COUNTRY CODE?</h1>
            </div>
          </section>
          <section className={styles.home}>
            <Header
              isHomeOrAboutPage
              isCountriesAnimated
            />
            {/* <Nav
              pageName="about"
            /> */}
            <Carousel
              countries={visitedCountries}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Entry;
