import React, { useState } from 'react'
import {Link} from 'react-scroll';
import './navbar.css';
import menusign from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className='navbar'>
        <div>
        <h1>MAA</h1>
        </div>
        <div className='menu'>
            <Link activeClass='active' to='intro' spy={true} offset={-50} smooth={true} duration={500} className='menu-items'>
            <i className="fas fa-info-circle"></i>
            Home
            </Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500} className='menu-items'>
            <i className="fas fa-info-circle"></i>
            About
            </Link>
            <Link activeClass='active' to='work' spy={true} offset={-50} smooth={true} duration={500} className='menu-items'>
            <i className="fas fa-info-circle"></i>
            Portfolio
            </Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} smooth={true} duration={500} className='menu-items'>
            <i className="fas fa-info-circle"></i>
            Clints
            </Link>
        
               <button className='btns' onClick={()=> {
                    document.getElementById('contactpage').scrollIntoView({behavior: 'smooth'});
                    }}>Contect Me</button>
      
      
             <img alt='' src={menusign} className='menupng' onClick={()=> setShowMenu(!showMenu)}></img>
             </div>
                 <div className='navmenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} offset={-50} smooth={true} duration={500} className='listitems' onClick={()=> setShowMenu(false)}>
                  <i className="fas fa-info-circle"></i>
                   Home
                 </Link>
                  <Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500} className='listitems' onClick={()=> setShowMenu(false)}>
            <i className="fas fa-info-circle"></i>
            About
            </Link>
            <Link activeClass='active' to='work' spy={true} offset={-50} smooth={true} duration={500} className='listitems' onClick={()=> setShowMenu(false)}>
            <i className="fas fa-info-circle"></i>
            Portfolio
            </Link>
            <Link activeClass='active' to='clients' spy={true} offset={-50} smooth={true} duration={500} className='listitems' onClick={()=> setShowMenu(false)}>
            <i className="fas fa-info-circle"></i>
            Clints
            </Link>
            <Link activeClass='active' to='contact' spy={true} offset={-50} smooth={true} duration={500} className='listitems' onClick={()=> setShowMenu(false)}>
            <i className="fas fa-info-circle"></i>
            Contact
            </Link>
        </div>
    </nav>
  )
}

export default Navbar