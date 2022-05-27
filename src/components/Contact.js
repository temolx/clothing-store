import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <div className='contact'>
        <div className="contact-content">
            <h1>Contact</h1>

            <form action="">
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
                <input type="tel" placeholder='Phone' />
                <input type="email" placeholder='Email' />
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Contact