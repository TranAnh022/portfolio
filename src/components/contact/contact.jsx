import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bhual4k', 'template_8xckfv8', form.current, 'StVi39OcYdaGkOUq4')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>namanh022@gmail.com</h5>
            <a href="mailto:namanh022@gmail.com"target='_blank' rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nam Anh</h5>
            <a href="http://m.me/namanh.tranvan.9/"target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0414845155</h5>
            <a href="https://api.whatsapp.com/send?phone=+358414845155" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject' placeholder='Subject' />
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name="message" rows="7" placeholder='Your message...' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact