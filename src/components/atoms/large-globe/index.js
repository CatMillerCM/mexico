'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useTransitionRouter } from 'next-transition-router';
import styles from './large-globe.module.css';

const LargeGlobe = () => {
  const router = useTransitionRouter();

  const initPlanet = () => {
    const planet = planetaryjs.planet();

    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'https://unpkg.com/world-atlas@1.1.4/world/110m.json' },
      oceans: { fill: 'cadetblue' },
      land: { fill: 'wheat' },
      borders: { stroke: 'wheat' }
    }));

    planet.projection.scale(300).translate([350, 500]);
    const largeCanvas = document.getElementById('large-globe');

    planet.onDraw(() => {
      planet.projection.rotate([Date.now() / 30, -20])
    });

    planet.draw(largeCanvas);
  };

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 6000);
  }, []);

  return (
    <div>
      <Script src="https://d3js.org/d3.v3.min.js" />
      <Script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js" />
      <Script src="/js/planetaryjs.min.js" onLoad={initPlanet} />
      <canvas className={styles.largeGlobe} id="large-globe" width="1000" height="1000"></canvas>
    </div>
  );
}

export { LargeGlobe };