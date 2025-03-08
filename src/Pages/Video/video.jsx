import React from 'react'
import './video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import recommended from '../../components/recommended/recommended'

const video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <recommended/>
    </div>
  )
}

export default video
