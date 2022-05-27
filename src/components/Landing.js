import React from 'react'
import bg from '../images/bg_video.mp4'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing'>
        <div className="text-container">
          <button><Link to='shop'>Clothes</Link></button>
        </div>

        <div className="video-container">
          <video src={bg} loop autoPlay muted></video>
        </div>
    </div>
  )
}

export default Landing