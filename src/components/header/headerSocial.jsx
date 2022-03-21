import React from 'react'
import { BsLinkedin,BsGithub,BsFacebook } from 'react-icons/bs'

const headerSocial = () => {
  return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/tran-anh-133103197/"><BsLinkedin/></a>
          <a href="https://github.com/TranAnh022"><BsGithub/></a>
          <a href="https://www.facebook.com/namanh.tranvan.9/"><BsFacebook/></a>
    </div>
  )
}

export default headerSocial