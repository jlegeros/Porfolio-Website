import React from 'react';

import ComingSoon from './components/ComingSoon';
import Title from './components/Title';
import Tile from './components/Tile'

function App() {
  return (
    <div className="body">
      <Title />
      <div className="right-side">
        <div className="about-me">
          <Tile />
        </div>
        <div className="portfolio">
          <Tile />
        </div>
        <div className="my-skills">
          <Tile />
        </div>
        <div className="contact-me">
          <Tile />
        </div>
      </div>
    </div>
  );
}

export default App;
