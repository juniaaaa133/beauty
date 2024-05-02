import React from 'react'
import TransparentSrv from '@/moduleX/service/TransparentSrv/TransparentSrv'
import ClassicPric from '@/moduleX/pricing/Classic/ClassicPric'

const Service = ({id} : {id : string}) => {
  return (
    <div className='big-bar frame' id={id}>
        <TransparentSrv />
        <div className="big-bar"></div>
        <ClassicPric />
    </div>
  )
}

export default Service