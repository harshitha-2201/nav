import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'


const Navbar = () => {

    const [Mobile , setMobile] = useState(false)
  return (
    <nav className='nabar'>
      
        <h2 className='logo'>Logo</h2>
        <ul className= {Mobile ? 'nav-links-mobile' : 'nav-links'} onClick ={() => setMobile(false)}>
            <Link to = '/'  ><li>Home</li></Link>
            <Link to = '/about'><li>About</li></Link>
            <Link to = '/features'><li>Features</li></Link>
            <Link to = '/services'><li>Services</li></Link>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross/> : <FaBars/>}
        </button>
     
    </nav>
  )
}

export default Navbar
