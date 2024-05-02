import React from 'react'
import ClassicGallery from '@/moduleX/gallery/Classic/ClassicGallery'

const Work = ({id} : {id : string}) => {
  return (
    
    <div className="frame big-bar" id={id}>
      <ClassicGallery />
    </div>
    
  )
}

export default Work