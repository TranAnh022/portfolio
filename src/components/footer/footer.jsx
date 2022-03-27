import React from 'react'
import './footer.css'
import {AiFillInstagram,AiFillFacebook} from'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>Tran Anh</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/namanh.tranvan.9/"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/namanh022/"><AiFillInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tran Anh</small>
      </div>
    </footer>
  )
}

export default Footer