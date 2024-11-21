import React from 'react'
import Navbar from './../../Components/Navbar/Navbar'
import AboutImg from './About.png'
import './About.css'
import Footer from '../../Components/Navbar/Footer/Footer'
function About() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>About</h1>
        <img src={AboutImg} className='header-img'/>
        <Footer/>
    </div>
  )
}

export default About