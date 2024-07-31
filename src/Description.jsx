import React, { useRef, useState } from 'react';
import moon from './assets/image-moon.png';
import mars from './assets/image-mars.png';
import titan from './assets/image-titan.png';
import europa from './assets/image-europa.png';
import data from './data.js';

const images = [moon, mars, europa, titan];

function Description() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const navigation = useRef();

  function tabChange(e) {
    const index = parseInt(e.target.dataset.index, 10);
    setPlanetNumber(index);
    const children = navigation.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove("active");
    }
    e.target.classList.add("active");
  }

  return (
    <div className='destination-section'>
      <div className="destination-content">
        <>
          <h1 className="destination-content-subtitle">
            <span>01</span> Pick your destination
          </h1>
          <div className="destination-content-img">
            <img src={images[planetNumber]} alt={data.destinations[planetNumber].name} />
          </div>
          <div ref={navigation} className="destination-content-navigation">
            <div data-index={0} onClick={tabChange} className="tab active">moon</div>
            <div data-index={1} onClick={tabChange} className="tab">mars</div>
            <div data-index={2} onClick={tabChange} className="tab">europa</div>
            <div data-index={3} onClick={tabChange} className="tab">titan</div>
          </div>
          <h1 className="destination-content-title">
            {data.destinations[planetNumber].name}
          </h1>
          <p className="destination-content-body">
            {data.destinations[planetNumber].description}
          </p>
          <div className="destination-info">
            <div className="distance">
              <p>avg. distance</p>
              <h1>{data.destinations[planetNumber].distance}</h1>
            </div>
            <div className="item">
              <p>est. travel time</p>
              <h1>{data.destinations[planetNumber].travel}</h1>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Description;
