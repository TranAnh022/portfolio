import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
import { MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react';



const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href='#header' onClick={()=>setActiveNav('#header')} className={activeNav === '#top' ? 'active' : ''}><IoIosHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/></a>
      <a href='#contact'onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav