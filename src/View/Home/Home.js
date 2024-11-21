import React from 'react'
import Navbar from './../../Components/Navbar/Navbar'
import HomeImg from './Home.png'
import './Home.css'
import Footer from '../../Components/Navbar/Footer/Footer'
import {Toaster} from "react-hot-toast"
import toast from 'react-hot-toast'
function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='page-title'>Home </h1>
        <img src={HomeImg} className='header-img'/>

       
  
        <button type='button' onClick={()=>{
          toast.loading("Please Wait",{
            style:{
              boderRadius:"10px",
              background:"blue",
              color:"#fff"
              }
          })
        }}>Load</button>

        <button type='button' onClick={()=>{
          toast.dismiss()
          toast.success("Loaded Succesfully",{
            icon:"✌️",
            duration:3000,
            style:{
            boderRadius:"10px",
            background:"green",
            color:"#fff"
            }
          })
        }}>Finish</button>
  
        <button type='button' onClick={()=>{
          toast.dismiss()
          toast.error("Failed to load",{icon:"😒",
            style:{
              boderRadius:"10px",
              background:"red",
              color:"#fff"
              }
          })         
        }}> Fail</button>
  
        <Footer/>
        <Toaster/>
    </div>
  )
}

export default Home