import React from 'react'
import './index.css'

const RoundedCta = ({text,w,h}) => {
  return (
    <button className={`rc`} style={{
      width : w, 
      height : h,
    }}>

        <div className={`rc-layer bg-sec`}></div>
        <div className="rc-txt main-f fontclD">{text}</div>
    </button>
  )
}

export default RoundedCta