import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='home-section'>
      <div className="home-content">
        <div className="home-content-subtitle">
          so you want to travel to
        </div>
        <h1 className='home-content-title'>SPACE</h1>
        <p className='home-content-body'>
          Lets face it. If you want to go  to space, you might as well genuinely go to outer space and not hover kind of on the adge of it. Well sit back, and relax because we will give you a truly out of this world experience!
          </p>
          <div className="home-content-explore">
          <Link to='/destination'>explore</Link>
          </div>
      </div>
    </div>
  )
}

export default Home
