'use client'
import React, { useEffect, useState } from 'react'
import ClassicTitle from '@/moduleX/title/Classic/ClassicTitle'
import './index.css'
import { teamapi } from '@/data/data';

const ClassicTeam = () => {

let [teamData,setTeamData] = useState(undefined);



useEffect(()=>{
setTeamData(teamapi);
},[])

  return (
teamData == undefined ? <></>
:

    <div className='cst'>
 <ClassicTitle text={teamData.title}/>
 
        <div className="cst-ctn">
           {
            teamData.team.map((data,index) => (
                <div key={index} className="csts mega-trans">
                <img src={data.image} alt="" className="bbs cst-img" />
                <div className="cst-info-ctn">
                    <h3 className="cst-name main-f fontcl">{data.name}</h3>
                    <h5 className="cst-role main-f fontcl3">{data.role}</h5>
                </div>
                        </div>
            ))
           }
        </div>
    </div>
  )
}

export default ClassicTeam