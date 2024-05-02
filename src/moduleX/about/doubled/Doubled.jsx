import React from 'react'
import './index.css'
import {  FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const DoubledAbt = () => {
  return (
    <div className='dbd'>
    <div className="dbd-info-ctn">
        <div className="dbd-intro-txt sec-f fontcl2">Welcome to</div>
      <h1 className="dbd-title fontcl main-f">Beauty Makeup & Fashion</h1>
      <p className="dbd-txt fontcl3 main-f">
      {
        `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        `
      }
    </p>
   <div className="dbd-icn-main">
    <div className="dbd-icn-title sec-f fontcl2">Our Socials</div>
   <div className="dbd-icn-ctn">
<a href='/' className='dbd-icn-a bs mega-trans' >
<FaFacebookF className='dbd-icn fontcl2'/>
</a>
<a href='/' className='dbd-icn-a bs mega-trans' >
<AiFillInstagram className='dbd-icn fontcl2'/>
</a>
<a href='/' className='dbd-icn-a bs mega-trans' >
<FaTelegramPlane className='dbd-icn fontcl2'/>
</a>
<a href='/' className='dbd-icn-a bs mega-trans' >
<FaLinkedinIn className='dbd-icn fontcl2'/>
</a>
    </div>
   </div>
    </div>
    <div className="dbd-img-ctn">
    <img  src="https://i.pinimg.com/736x/f2/cc/a9/f2cca9d908f5fc2a4d32122dae0a7f80.jpg" alt="" className="dbd-img1" />
    <img  src="https://i.pinimg.com/736x/23/0d/71/230d713d861bb4d32e4a49e62a70d7a1.jpg" alt="" className="dbd-img2" />

    </div>
    
  </div>
  )
}

export default DoubledAbt