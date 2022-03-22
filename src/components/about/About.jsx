import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { GiHobbitDwelling } from 'react-icons/gi'
import about_me from '../../assests/about_me.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me_img">
            <img src={about_me} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Junior of Vaasa UAS</small>
            </article>
          
            <article className='about__card'>
              <GiHobbitDwelling className='about__icons'/>
              <h5>Hobbies</h5>
              <small>Cooking,Music,...</small>
            </article>
       
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icons'/>
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores eum amet maiores blanditiis inventore, odit iusto delectus fugiat excepturi, officia quos voluptatem ea quia. Minima iste omnis ipsa exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt deleniti similique nemo. Eveniet reprehenderit et voluptatibus rerum officiis tempora itaque sit delectus magni quod. Vitae magnam voluptatum quibusdam eaque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus voluptatem sint unde molestiae ipsa modi repellat odio rem nost
        </p>

        <a href="#contact" className='btn btn__primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About