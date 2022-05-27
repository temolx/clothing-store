import React from 'react'
import up from '../images/up.png'

function ScrollTop() {

    const handleSroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  return (
    <div className='scrollBtn'>
        <button onClick={handleSroll}><img src={up} alt="arrow pointing upwards" /></button>
    </div>
  )
}

export default ScrollTop