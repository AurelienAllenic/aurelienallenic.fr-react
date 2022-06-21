import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/photo-cv.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h1>Aurélien Allenic</h1>
            <h5 className="text-light">Developpeur Web</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header