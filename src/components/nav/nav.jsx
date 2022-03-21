import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
import { MdOutlineWorkOutline,MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react';



const nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''}><IoIosHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href='#contact'onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default nav