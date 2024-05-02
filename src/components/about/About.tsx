import React from 'react'
import ClassicAbt from '@/moduleX/about/classic/Classic'
import ClassicTeam from '@/moduleX/team/classicTeam/ClassicTeam'

import DoubledAbt from '@/moduleX/about/doubled/Doubled'

const About = ({id} : {id : string}) => {

let text =  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
  `
let title = 'Beauty Makeup & Hairstyle';
let iconObj = {
  fb : {url : '/'},
  insta : {url : '/'},
  tele : {url : '/'},
  linked : {url : '/'},
}

  return (
    <div className='frame big-bar' id={id}>
    <ClassicAbt desc={text} iconsObject={iconObj} title={title} image={'https://i.pinimg.com/736x/06/ba/47/06ba47c7ef9796ae976405859c0c43d4.jpg'}/>
    <div className="big-bar"></div>
    <ClassicTeam />
    </div >
    
  )
}

export default About