'use client'
import React, { useState } from 'react'
import './transnav.css'
import {Link} from 'react-scroll/modules' ;
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const TransparentNav = ({logo}) => {

let [isOpened, setIsOpened] = useState(false);

  return (
  <>
    <div className='tsnmain'>
        <div className="tsn-logo sys-f fontcl2 bcu">{logo}</div>
        <div className="tsn-nv-ctn ">
            <Link smooth={true} offset={-200} duration={1000} to='/' className=' tsns sys-f text-[14px] fontclH mega-trans bcu'>Home</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#about' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>About</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#service' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>Service</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#testimonial' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>Testimonial</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#gallery' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>Work</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#contact-us' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>Contact</Link>

        </div>
        <CiMenuFries className='tsn-icn' onClick={()=>setIsOpened(true)}/>
    </div>
    <div className={`${isOpened == true ? "tsn-mbmain bg-main" : "tsn-mbmain-cl bg-main"} mega-trans`}>
      <RxCross1 className='tsncross' onClick={()=>setIsOpened(false)} />
    <Link smooth={true} offset={-200} duration={1000} to='/' className='tsns sys-f text-[14px] fontclH mega-trans bcu'>Home</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#about' className='tsns sys-f text-[14px] fontclH mega-trans'>About</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#service' className='tsns sys-f text-[14px] fontclH mega-trans'>Service</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#testimonial' className='tsns sys-f text-[14px] fontclH mega-trans'>Testimonial</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#gallery' className='tsns sys-f text-[14px] fontclH mega-trans'>Work</Link>
            <Link smooth={true} offset={-200} duration={1000} to='#contact-us' className='tsns sys-f text-[14px] fontclH mega-trans'>Contact</Link>
 
    </div>
  </>
  )
}

export default TransparentNav