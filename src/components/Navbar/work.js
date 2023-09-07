import React from 'react'
import './work.css';
import P1 from '../../assets/TravelProject.png';
import P2 from '../../assets/boostrap.png';
import P3 from '../../assets/Portfolio.png';

function Work() {
  return (
    <section id='work'>
        <h1 className='title'>
         My Works   
        </h1>
        <p>These projects encompass a diverse range of web applications and interfaces, each presenting its own set of challenges and opportunities for growth. From crafting intuitive user interfaces to ensuring seamless responsiveness across various devices, I've cultivated proficiency in HTML, CSS, and JavaScript to bring these projects to life.</p>
         <div className='project-samples'>
             <img alt='' src={P1} className='abcimg'></img>
             <img alt='' src={P2} className='abcimg'></img>
             <img alt='' src={P3} className='abcimg'></img>
             <img alt='' src={P1} className='abcimg'></img>
             <img alt='' src={P1} className='abcimg'></img>
             <img alt='' src={P1} className='abcimg'></img>
             <div className='w-btn'>
             <button className='w-btn'>See More</button>
             </div>
         </div>
         
    </section>
  )
}

export default Work