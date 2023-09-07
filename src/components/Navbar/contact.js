import React from 'react'
import './contact.css';
import C1 from '../../assets/web.jpeg'
import F from '../../assets/fac.png'
import I from '../../assets/ist.png'
import T from '../../assets/twi.png'
import Y from '../../assets/you.png'

function Contact() {
  return (
    <section id='contactpage'>
        <div id='clients'>
            <h1>My Clients</h1>
            <p>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
            <div className='clientimgs'>
                <img alt='' src={C1} className='clientimg'></img>
                <img alt='' src={C1} className='clientimg'></img>
                <img alt='' src={C1} className='clientimg'></img>
                <img alt='' src={C1} className='clientimg'></img>
            </div>
        </div>

        <div id='contact'>
            <h1>Contact Me</h1>
            <p>Please fill out the form below to discuss any work opportunities</p>
            <form className='contactform'>
                <input type='text' placeholder='Your Name' className='name'></input>
                <input type='emial' placeholder='Your Email' className='email'></input>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitbtn'>Submit</button>
                <div className='links'>
                    <img src={F} alt='' className='link'></img>
                    <img src={I} alt='' className='link'></img>
                    <img src={T} alt='' className='link'></img>
                    <img src={Y} alt='' className='link'></img>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact