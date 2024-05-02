import React from 'react'
import './index.css'
import {  FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ClassicAbt = ({title , desc,image,iconsObject}) => {
  return (
    <div className='csa'>
      <div className="csa-info-ctn">
        <h1 className="csa-title fontcl main-f">{title}</h1>
        <p className="csa-txt fontcl3 main-f">{desc} </p>
      <div className="csa-icn-ctn">
<a href={iconsObject.fb.url} className='csa-icn-a bg-sec mega-trans' >
  <FaFacebookF className='csa-icn fontclD'/>
</a>
<a href={iconsObject.insta.url} className='csa-icn-a bg-sec mega-trans' >
  <AiFillInstagram className='csa-icn fontclD'/>
</a>
<a href={iconsObject.tele.url} className='csa-icn-a bg-sec mega-trans' >
  <FaTelegramPlane className='csa-icn fontclD'/>
</a>
<a href={iconsObject.linked.url} className='csa-icn-a bg-sec mega-trans' >
  <FaLinkedinIn className='csa-icn fontclD'/>
</a>
      </div>
      </div>
      <img  src={image} alt="" className="csa-img" />
      
    </div>
  )
}

export default ClassicAbt