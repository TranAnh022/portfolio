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

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={about_me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>Bachelor of Information Technology  at Vaasa UAS</small>
            </article>

            <article className="about__card">
              <GiHobbitDwelling className="about__icons" />
              <h5>Hobbies</h5>
              <small>Cooking,Music,...</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icons" />
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>

          <p>
            I'm a fresh graduate at Vamk with a major in Information Technology.
            I'm eager to learn new things and socialize with others. I take
            great care in the experience, architecture, and code quality of the
            projects I build. I'm actively looking for a job or entry level
            position.
          </p>

          <a href="#contact" className="btn btn__primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About