import React from 'react'
import Navbar from './../../Components/Navbar/Navbar'
import ContactImg from './Contact.png'
import './Contact.css'
import Footer from '../../Components/Navbar/Footer/Footer'
function Contact() {
  return (
    <div>
      <Navbar/>
        <h1 className='page-title'>Contact</h1>
        <img src={ContactImg} className='header-img' />
        <Footer/>
    </div>
  )
}

export default Contact