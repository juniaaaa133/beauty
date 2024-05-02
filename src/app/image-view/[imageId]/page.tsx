import React from 'react'
import '.'
import { stringify } from 'querystring'
const ImageView = ({image} :{
    image : string,
}) => {
  return (
    <div className='iv-ctn'>
        <img src={image} alt="" className="iv-img" />
        
    </div>
  )
}

export default ImageView