import React from 'react'
import SwipeTesti from '@/moduleX/testimonial/SwipeTesti/SwipeTesti'

const Testimonial = ({id} : {id : string}) => {
  return (
    <div className='big-bar frame' id={id}>
        <SwipeTesti />
    </div>
  )
}

export default Testimonial