import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me1.jpg'
import HeaderSocial from './headerSocial'


const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>Tran Anh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" className="img__header" />
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header