'use client'

import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import { MdOutlineArrowBackIosNew
 } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { testimonial } from '@/data/data';

const SwipeTesti = () => {

let wrapper = useRef(null);
let [testiData,setTestiData] = useState(undefined);
let [scrollButtonDisplay, setScrollButtonDisplay] = useState({leftButton : false,rightButton : true});
let [isDragging,setIsDragging] = useState(false);
let [ currentScrollLeft , setCurrentScrollLeft] = useState(0)
let [ currentPageX , setCurrentPageX] = useState(0)


let FetchData = () => {
  setTestiData(testimonial);
}

useEffect(() => {
  FetchData();
},[])

let DirectArrow = (scrollDirection) => {
  if(typeof window !== undefined || null){
    let direction ;
    let wrapperDiv = wrapper.current;

    scrollDirection == 'scrollLeft' ? direction = -1 : direction = 1;

    let scroll = wrapperDiv.clientWidth * direction;
    console.log(  wrapperDiv.scrollLeft ,)
  wrapperDiv.scrollBy({left :scroll , behavior : 'smooth' })
  }
}

let GrabCard = (e,type) => {
  let currentPagex =0;
  let wrapperDiv = wrapper.current;
  
  if (type == 'down'){
    setIsDragging(true);
    // currentPagex = ; 
    setCurrentPageX(e.pageX)
    setCurrentScrollLeft(wrapperDiv.scrollLeft) 
    // console.log('Mouse down',currentScrollLeft)
  }else if(type == 'move'){
    if(isDragging == false) return;
      e.preventDefault();
      let positionDiff = e.pageX - currentPagex; //0 - (-) 366 = 366-- 200 = - 166 
      wrapperDiv.scrollLeft =currentScrollLeft - positionDiff ; //0 - 366 = - 366;
      console.log('Mouse move',positionDiff)
  }else {
    setIsDragging(false)
  }
}

let ControlScrollButton = () => {
  let wrapperDiv = wrapper.current;
  let maxScroll = wrapperDiv.scrollWidth - wrapperDiv.clientWidth 
  wrapperDiv.scrollLeft <= 0 ?
    setScrollButtonDisplay({leftButton : false , rightButton : true})
  : wrapperDiv.scrollLeft >= maxScroll - 3 ?
  setScrollButtonDisplay({leftButton : true , rightButton : false})
  :
  setScrollButtonDisplay({leftButton : true , rightButton : true})

}

  return (
    testiData == undefined ? <></>
    :
    <div className='st-x'>
         <ClassicTitle text={testiData.title} />

        <div className="st-parent">
            <div className="st-ra half-transpr" >
            <MdOutlineArrowForwardIos onClick={()=>DirectArrow('scrollRight')}  className={`${scrollButtonDisplay.rightButton == true ? 'block' : 'hidden'} st-la-icn bs mega-trans bcu`} />
            </div>
            <div className="st-la half-transpl" >
                <MdOutlineArrowBackIosNew onClick={()=>DirectArrow('scrollLeft')}  className={`${scrollButtonDisplay.leftButton == true ? 'block' : 'hidden'} st-ra-icn bs mega-trans bcu`} />
            </div>
        <div ref={wrapper} onMouseMove={(e)=>GrabCard(e,'move')} onMouseDown={(e)=>GrabCard(e,'down')} onMouseUp={(e)=>GrabCard(e,'up')} onScroll={ControlScrollButton} className="st-ctnx">
            {
              testiData.people.map((data,index) => (
                <div key={index} className="sts">
              <div className="sts-layer bg-sec"></div>
              {
                data.image == null ?
                <img src="https://i.pinimg.com/564x/e5/6a/e9/e56ae96f7a58c6ee5b5499ad5c8764ab.jpg" alt="anonymous" className="pic sts-pfp" />
                :
                <img src={data.image} alt={data.name} className="pic sts-pfp" />
              }
              <div className="sts-info-ctn">
              <h3 className="sts-name main-f fontcl">{data.name}</h3>
              <p className="sts-msg main-f fontcl">{data.message}</p>
              </div>
            </div>
              ))
            }
       
        </div>
        </div>
        
    </div>
  )
}

export default SwipeTesti