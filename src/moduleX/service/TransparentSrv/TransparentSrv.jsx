'use client'
import React, { useEffect, useState } from 'react'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import './index.css'
import { serviceapi } from '@/data/data'

const TransparentSrv = () => {

let [serviceData,setServiceData] = useState(undefined)

let FetchData = () => {
  setServiceData(serviceapi)
}

useEffect(()=>{
  FetchData();
},[])

  return (
    serviceData == undefined? 
    <></>
    :
    <div className='tss'>
        <ClassicTitle text={serviceData.title} />
        
        <div className="tss-ctn">
         {
          serviceData.services.map((service,index) => (
            <div className="tssrv" key={index}>
            <img src={service.image} alt="" className="tss-img" />
            <h2 className="tss-title fontcl main-f">{service.title}</h2>
            <p className="tss-desc fontcl3">{service.desc}</p>
                  </div>
          ))
         }
        </div>
    </div>
  )
}

export default TransparentSrv