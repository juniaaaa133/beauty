'use client'
import React, { useEffect, useState } from 'react'
import './index.css'
import '../../input/botBordered.css'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import RoundedCta from '@/moduleX/ctas/rounded-cta/RoundedCta'
import { contactapi } from '@/data/data'

const WhiteLayoutCt = () => {

let [contactData,setContactData] = useState(undefined);

let FetchData = () => {
    setContactData(contactapi);
}

useEffect(()=>{
    FetchData()
},[])

  return (
   contactData == undefined ? <></>
   :
    <div className="wlc">
                <ClassicTitle text={contactData.title} />
<div className="main-f fontcl2 wlc-desc">{contactData.desc}</div>
    <div className="wlc-ctn">
 
 <div className="wlc-info-and">
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Address :</div>
    <div className="wlc-info-data main-f fontcl3">{contactData.address}</div>

</div>
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Phone Number :</div>
    <div className="wlc-info-data main-f fontcl3">{contactData.phone}</div>

</div>
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Email :</div>
    <div className="wlc-info-data main-f fontcl3">{contactData.email}</div>

</div>
</div>
<div className="wlc-form">
<input type="text" className="bbi-x wlc-inp main-f fontcl" placeholder='Name'/>
 <input type="email" className="bbi-x wlc-inp main-f fontcl" placeholder='Email'/>
<textarea name="text" id="" placeholder='Message' className="bbta-x wlc-ta main-f fontcl"></textarea>
<RoundedCta text={'Send Message'} color={'bg-sec'} h={'50px'} w={'160px'}/>

</div>
<div className="wlc-info-main">
 <img className='wlc-img pic' src='https://i.pinimg.com/564x/70/75/6a/70756aab623d69cb96ee831917d4d56a.jpg'/>
 <div className="wlc-info">
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Address :</div>
    <div className="wlc-info-data main-f fontcl3">Yangon , SouthOkkalapa Township , Myanmar</div>

</div>
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Phone Number :</div>
    <div className="wlc-info-data main-f fontcl3">09123456789</div>

</div>
<div className="wlc-infos">
    <div className="wlc-info-title main-f fontcl">Email :</div>
    <div className="wlc-info-data main-f fontcl3">example@gmail.com</div>

</div>
</div>
</div>
<div className="wlc-andic">
<ClassicTitle text={contactData.title} />

<div className="main-f fontcl2 wlc-desc">{contactData.desc}</div>
</div>
</div>
    </div>
  )
}

export default WhiteLayoutCt