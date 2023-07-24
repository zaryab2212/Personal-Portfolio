import React from 'react'

const SkillCard = ({url}) => {
  return (
    <div className='skillCard_container'>
        <div className='skillCard_image'>
            <img src={url}/>
        </div>
    </div>
  )
}

export default SkillCard