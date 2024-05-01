import React, { useRef, useState } from 'react'
import data from './data.js'

// import mobilefirsttechnologImage from '../Componants/images/image-launch-vehicle-portrait.jpg'
// import mobilesecondtechnologImage from '../Componants/images/image-spaceport-portrait.jpg'
// import mobilethirdtechnologImage from '../Componants/images/image-space-capsule-portrait.jpg'

function Technology() {

  const [technologyIndex, setTechnologyIndex] = useState(0)
  const [mobile, setMobiel] = useState(() => {
    if(window.innerWidth < 1200) {
      return true
    } else {
      return false
    } 
  })

  // let DesctoptechnologyImages = [
  //   mobilefirsttechnologImage,
  //   mobilesecondtechnologImage,
  //   mobilethirdtechnologImage
  // ]

  let technologyNavigation = useRef()
  let image = React.useRef()

  function changeTab(e) {
    setTechnologyIndex(e.target.dataset.index)
    let children = technologyNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth < 1200) {
        setMobiel(true)
      } else {
        setMobiel(false)
      }
    })
  })

  return (
    <div className='technology-section'>
      <div className="technology-subtitle">
        <span>03 </span>space launch 101
      </div>
      {
        <>
        <div ref={image} className="technology-img">
        {/* <img src={data.technology[technologyIndex].images.landscape} alt="" /> */}
        <img src={mobile === false? data.technology[technologyIndex].images.portrait : data.technology[technologyIndex].images.landscape} alt="" />
      </div>
      <div ref={technologyNavigation} className="technology-navigation">
        <div data-index={0} onClick={changeTab} className="technology-tab active">1</div>
        <div data-index={1} onClick={changeTab} className="technology-tab">2</div>
        <div data-index={2} onClick={changeTab} className="technology-tab">3</div>

      </div>
        <div className="technology-content">
          <div className="technology-content-subtitle">
            the technology...
          </div>
          <div className="technology-content-subtitle">
            {data.technology[technologyIndex].name}
          </div>
          <div className="technology-content-body">
            {data.technology[technologyIndex].description}
          </div>
        </div>
    </>
      }
    </div>
  )
}

export default Technology