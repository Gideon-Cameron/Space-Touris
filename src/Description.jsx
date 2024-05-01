import React, { useRef, useState } from 'react';
// import moon from '../Componants/images/image-moon.png'
import data from './data.js'

function Description() {
  const [planetNumber, setPlanetNumber] = useState(0);
  const navigation = useRef()

  function tabChange(e) {
    setPlanetNumber(e.target.dataset.index)
    let children = navigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove("active")
    }
    e.target.classList.add("active");
  }
  return (
    <div className='destination-section'>
      <div className="destination-content">
      {
            <>
      
        <h1 className="destination-content-subtitle">
          <span>01</span> Pick your destination
        </h1>
        <div className="destination-content-img">
          <img src={data.destinations[planetNumber].images.png} alt="" />
        </div>
        <div ref={navigation} className="destination-content-navigation">
          <div data-index={0} onClick={tabChange} className="tab active">moon</div>
          <div data-index={1} onClick={tabChange} className="tab">mars</div>
          <div data-index={2} onClick={tabChange} className="tab">europa</div>
          <div data-index={3} onClick={tabChange} className="tab">titen</div>
        </div>
        <h1 className="destination-content-title">
          {data.destinations[planetNumber].name}
        </h1>
        <p className="destination-content-body">
         {data.destinations[planetNumber].description}
        </p>
        <div className="destination-info">
          <div className="distance">
            <p>arg. distance</p>
            <h1> { data.destinations[planetNumber].distance} </h1>
          </div>
          <div className="item">
          <p>est. travel time</p>
          <h1>{data.destinations[planetNumber].travel}</h1>
          </div>
        </div>
        </>
          //  )
      // })
        }
      </div>
    </div>
  )
}

export default Description
