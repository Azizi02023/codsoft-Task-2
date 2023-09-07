import React from 'react'
import './skills.css';
import Ui from '../../assets/ui.jpeg';
import Web from '../../assets/web.jpeg';
import Reac from '../../assets/react.jpeg';

function Skills() {
  return (
    <section id='skills'>
        <h1 className='title'>What i do</h1>
        <p className='desc'>As a skilled and passionate web designer, I bring a wealth of experience to every project. With a keen eye for aesthetics and a deep understanding of user-centered design principles, I strive to create visually stunning and intuitive websites that captivate audiences.</p>

        <div className='skillBars'>
        <div className='skillBar'>
            <img alt=' ' src={Ui} className='skillbarimg'></img>
            <div className='skillbartext'>
                <h4>UI/UX Designer</h4>
                <p>I am expert with design the front end of the website and im interested with</p>
            </div>
        </div>

        <div className='skillBar'>
            <img alt=' ' src={Web} className='skillbarimg'></img>
            <div className='skillbartext'>
                <h4>UI/UX Designer</h4>
                <p>I am expert with design the front end of the website and im interested with</p>
            </div>
        </div>

        <div className='skillBar'>
            <img alt=' ' src={Reac} className='skillbarimg'></img>
            <div className='skillbartext'>
                <h4>UI/UX Designer</h4>
                <p>I am expert with design the front end of the website and im interested with</p>
            </div>
        </div>
        </div>
    
    </section>
  )
}

export default Skills