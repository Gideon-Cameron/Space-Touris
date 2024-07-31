import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/logo.svg'
// import Logo from './images/logo.svg';
import Burger from './assets/icon-hamburger.svg'
import closeIcon from './assets/icon-close.svg'
function Nav() {
    const [open,setOpen] = React.useState(false)
    const [active, setActive] = useState(window.location.pathname.replace('/','')|| 'home')

    function close() {
        setOpen(false)
    }

    useEffect(() => { 
        setActive(location.pathname.replace('/','') ? location.pathname.replace('/','') : 'home')
    },[location])

    document.addEventListener("DOMContentLoaded", function() {
        var homeButton = document.getElementById("homeButton");
        homeButton.click();
    });

  return (
    <header>
        <nav className={`nav ${open? 'show': ""}`}>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className={`ul ${active}`}>
                <li onClick={close} className='active'><Link to='/'>00 Home</Link></li> 
                <li onClick={close} ><Link to='/destination' id='homeButton'>01 Destination</Link></li>
                <li onClick={close} ><Link to='/crew'>02 Crew</Link></li>
                <li onClick={close} ><Link to='/technology'>03 Technology</Link></li>
            </ul>
            
            <div onClick={() => setOpen(!open)} className="burger">
                
                {
                    open === false ?
                    <img src={Burger} alt="" /> :
                    <img src={closeIcon} alt="" />
                }
            </div>
        </nav>
    </header>
  )
}
export default Nav