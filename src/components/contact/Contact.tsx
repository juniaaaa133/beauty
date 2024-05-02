import React from 'react'
import WhiteLayoutCt from '@/moduleX/contact/WhiteLayout/WhiteLayoutCt'

const Contact = ({id} : {id: string}) => {
  return (
    <div className=" big-bar" id={id}>
        <WhiteLayoutCt />
    </div>
    
  )
}

export default Contact