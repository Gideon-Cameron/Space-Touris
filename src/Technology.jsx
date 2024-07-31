import React, { useRef, useState, useEffect } from 'react';
import data from './data.js';
import launchLandscape from './assets/image-launch-vehicle-landscape.jpg';
import spaceportLandscape from './assets/image-spaceport-landscape.jpg';
import capsuleLandscape from './assets/image-space-capsule-landscape.jpg';

import launchPortrait from './assets/image-launch-vehicle-portrait.jpg';
import spaceportPortrait from './assets/image-spaceport-portrait.jpg';
import capsulePortrait from './assets/image-space-capsule-portrait.jpg';

const landscapeImages = [launchLandscape, spaceportLandscape, capsuleLandscape];
const portraitImages = [launchPortrait, spaceportPortrait, capsulePortrait];

function Technology() {
  const [technologyIndex, setTechnologyIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  const technologyNavigation = useRef();
  const image = useRef();

  function changeTab(e) {
    const index = parseInt(e.target.dataset.index, 10);
    setTechnologyIndex(index);
    const children = technologyNavigation.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active');
    }
    e.target.classList.add('active');
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1200);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='technology-section'>
      <div className="technology-subtitle">
        <span>03 </span>space launch 101
      </div>
      <>
        <div ref={image} className="technology-img">
          <img
            src={isMobile ? landscapeImages[technologyIndex] : portraitImages[technologyIndex]}
            alt={data.technology[technologyIndex].name}
          />
        </div>
        <div ref={technologyNavigation} className="technology-navigation">
          <div data-index={0} onClick={changeTab} className="technology-tab active">1</div>
          <div data-index={1} onClick={changeTab} className="technology-tab">2</div>
          <div data-index={2} onClick={changeTab} className="technology-tab">3</div>
        </div>
        <div className="technology-content">
          <div className="technology-content-subtitle">
            The technology...
          </div>
          <div className="technology-content-title">
            {data.technology[technologyIndex].name}
          </div>
          <div className="technology-content-body">
            {data.technology[technologyIndex].description}
          </div>
        </div>
      </>
    </div>
  );
}

export default Technology;
