import React from 'react'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'

function Footer() {
  return (
    <footer>


        <ul className="social">
            <li><img src={fb}/></li>
            <li><img src={twitter}/></li>
            <li><img src={instagram}/></li>
            <li><img src={youtube}/></li>
        </ul>

        <p>The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB. H&M is committed to accessibility. That commitment means H&M embraces WCAG guidelines and supports assistive technologies such as screen readers. H&M has since it was founded in 1947 grown into one of the world's leading fashion companies.</p>

        <p>© All Rights Reserved.</p>
    </footer>
  )
}

export default Footer