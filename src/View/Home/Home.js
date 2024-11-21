import React from 'react'
import Navbar from './../../Components/Navbar/Navbar'
import HomeImg from './Home.png'
import './Home.css'
import Footer from '../../Components/Navbar/Footer/Footer'
function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Home </h1>
        <img src={HomeImg} className='header-img'/>
        <Footer/>
    </div>
  )
}

export default Home