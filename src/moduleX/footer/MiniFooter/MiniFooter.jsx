import React from 'react'
import './index.css'

const MiniFooter = ({text}) => {
  return (
    <div className='mf big-bar'>
        <div className="mf-txt main-f fontcl3">{text}</div>
    </div>
  )
}

export default MiniFooter