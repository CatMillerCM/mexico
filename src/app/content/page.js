'use client';

import Script from 'next/script';

const PlanetTest = () => {
  const initPlanet = () => {
    const planet = planetaryjs.planet();

    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'https://unpkg.com/world-atlas@1.1.4/world/110m.json' },
      oceans: { fill: 'cadetblue' },
      land: { fill: 'wheat' },
      borders: { stroke: 'wheat' }
    }));

    planet.projection.scale(100).translate([125, 125]);
    var canvas = document.getElementById('globe');
    planet.onDraw(() => {
      planet.projection.rotate([Date.now() / 30, -20])
    });

    planet.draw(canvas);
  };

  return (
    <>
      <Script src="https://d3js.org/d3.v3.min.js" />
      <Script src="https://unpkg.com/topojson@3.0.2/dist/topojson.min.js" />
      <Script src="/js/planetaryjs.min.js" onLoad={initPlanet} />
      <main>
        <canvas id="globe" width="250" height="250"></canvas>
      </main>
    </>
  );
};

export default PlanetTest;
