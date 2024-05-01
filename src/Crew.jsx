import React, { useRef, useState } from 'react'
import data from './data.js'

function Crew() {

  const [crewIndex, setCrewIndex] = useState(0)

  let crewNavigation = useRef()

  function changeTab(e) {
    setCrewIndex(e.target.dataset.index)
    let children = crewNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }
  
  return (
    <div className='crew-section'>
      <div className="crew-subtitle">
        <span>02 </span>meet your crew
      </div>
      {
        <>
        <div className="crew-img">
        <img src={data.crew[crewIndex].images.png} alt="" />
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
      }
    </div>
  )
}

export default Crew
