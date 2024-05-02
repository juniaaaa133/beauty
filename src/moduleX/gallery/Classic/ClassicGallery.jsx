'use client'
import React, { useEffect, useState } from 'react'
import './index.css'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import { RxCross1 } from "react-icons/rx";
import { gallery } from '@/data/data';

const ClassicGallery = () => {

let [imageUrl,setImageUrl] = useState();
let [isViewed,setIsViewed] = useState(false);
let [imageData,setImageData] = useState(undefined);

let FetchData = () => {
  setImageData(gallery)
}

useEffect(()=>{
  FetchData();
},[])

let ViewImage = (image) => {
setIsViewed(true);
let filteredImage = imageData.gallery.filter((data) => data.image == image)[0];
console.log('filteredImage', filteredImage)
setImageUrl(filteredImage.image)
}

let HideImage = () => {
  setIsViewed(false);
  setImageUrl('')
  }

  return (
    imageData == undefined ? <></>
    :
   <>
    <div className='cg'>
      <ClassicTitle text={imageData.title} />
      <div className="cg-ctn">
{
  imageData.gallery.map((data,index) => (
    <img key={index} onClick={()=>ViewImage(data.image)} src={data.image} alt={data.name} className="cgls pic bbs trans" />
  ))
}
      </div>
    </div>
    <div onClick={HideImage} className={isViewed == true ? "cg-iv-ctn" : 'hidden'}>
      <img src={imageUrl} alt="" className="cg-iv-img" />
<RxCross1 className='cgivicn bcu'/>
    </div>
   </>
  )
}

export default ClassicGallery