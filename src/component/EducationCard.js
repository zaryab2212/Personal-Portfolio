import React from 'react'
import {FaGraduationCap} from "react-icons/fa"

const EducationCard = ({Institute,degree,year}) => {
  return (
    <div className='education_card_container'>
        <div className='education_icon'>
            <FaGraduationCap/>
        </div>
        <div className='education_card_content'>
            <p>{year}</p>
            <h3>{degree}</h3>
            <p>{Institute}</p>
        </div>
    </div>
  )
}

export default EducationCard