import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import Myimg from '../../assets/Anas.jpg';

function Intro() {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm</span> 
            <span className='introname'>Mohammad Anas Azizi</span>
            Web Developer<p className='intropara'>Experienced web developer adept at crafting dynamic and user-centric websites, blending technical expertise with creative design to deliver seamless digital experiences.</p>
            <Link><button>Hire Me</button></Link>
        </div>
        <div>
        <img alt=' ' src={Myimg} className='bg'></img>
        </div>
    </section>
  )
}

export default Intro