'use client'
import React, { useEffect, useState } from 'react'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import './index.css'
import { FaArrowRight } from "react-icons/fa";
import { pricing } from '@/data/data';
import {Link} from 'react-scroll/modules'

const ClassicPric = () => {

let [priceData,setPriceData]  = useState(undefined);

let FetchData = () => {
    setPriceData(pricing);
}

useEffect(()=>{
    FetchData();
},[])

  return (
    priceData == undefined ? <></>
    :
    <div className='clspric'>
        <ClassicTitle text={priceData.title} />
        <div className="clspric-ctn">
           {
            priceData.pricings.map((data,index) => (
                <div className="clsprics mega-trans" key={index}>
                <h3 className="clspric-title main-f fontcl">{data.type}</h3>
                <div className="clspric-amo-ctn trans">
                    <span className="clspric-sign fontcl2 main-f">Ks</span>
                    <span className="clspric-amount fontcl2 main-f">{data.amount}</span>
                    
                </div>
                <div className="clspric-info-ctn">
{
    data.features.map((feature,index) => (
        <span key={index} className="clspric-info main-f fontcl3">{feature}</span>
    ))
}
                    </div>
                    <Link to='#contact' className="clspric-cta-ctn trans ">
                        <span className="clspric-cta-name main-f fontcl2">Get Started</span>
                        <FaArrowRight className='clspric-icn main-f fontcl2'/>
                    </Link>
                        </div>
            ))
           }

        </div>
    </div>
  )
}

export default ClassicPric