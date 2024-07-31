import React, { useRef, useState } from 'react';
import data from './data.js';
import douglas from './assets/image-douglas-hurley.png';
import mark from './assets/image-mark-shuttleworth.png';
import victor from './assets/image-victor-glover.png';
import anousheh from './assets/image-anousheh-ansari.png';

const crewImages = [douglas, mark, victor, anousheh];

function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crewNavigation = useRef();

  function changeTab(e) {
    const index = parseInt(e.target.dataset.index, 10);
    setCrewIndex(index);
    const children = crewNavigation.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active');
    }
    e.target.classList.add('active');
  }

  return (
    <div className='crew-section'>
      <div className="crew-subtitle">
        <span>02 </span>meet your crew
      </div>
      <>
        <div className="crew-img">
          <img src={crewImages[crewIndex]} alt={data.crew[crewIndex].name} />
        </div>
        <div ref={crewNavigation} className="crew-navigation">
          <div data-index={0} onClick={changeTab} className="crew-tab active"></div>
          <div data-index={1} onClick={changeTab} className="crew-tab"></div>
          <div data-index={2} onClick={changeTab} className="crew-tab"></div>
          <div data-index={3} onClick={changeTab} className="crew-tab"></div>
        </div>
        <div className="crew-content">
          <div className="crew-content-role">
            {data.crew[crewIndex].role}
          </div>
          <div className="crew-content-name">
            {data.crew[crewIndex].name}
          </div>
          <div className="crew-content-body">
            {data.crew[crewIndex].bio}
          </div>
        </div>
      </>
    </div>
  );
}

export default Crew;
