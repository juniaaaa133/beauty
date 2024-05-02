'use client'
import {Link} from 'react-scroll/modules'
import './oshero.css'
import RoundedCta from '@/moduleX/ctas/rounded-cta/RoundedCta'

const OldSchHero = ({image,headline,desc}) => {


  return (
    <div className='osh-main'>
        <div className="wlayer"></div>
        <div className="osh-bg" style={ {
            backgroundImage : `url(${image})`,
        }}></div>
        <div className="osh-info-ctn">
            <h1 className="osh-head main-f fontcl">{headline}</h1>
            <p className="osh-desc main-f fontcl3">{desc}</p>
            <Link to='#about' smooth={true} offset={-200} duration={1000}>
                <RoundedCta text={'Learn More'} color={'bg-sec'} h={''} w={'160px'}/>
            </Link>
            </div>
        
    </div>
  )
}

export default OldSchHero