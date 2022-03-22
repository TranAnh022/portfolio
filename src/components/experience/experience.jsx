import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import {IoLogoCss3,IoLogoJavascript,IoLogoNodejs} from 'react-icons/io'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiDeno,SiMongodb,SiPostgresql} from 'react-icons/si'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>
    
      <div className="container experience__container">
    {/* --------------Front-End------------------- */}
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineHtml5 className="experience__icon"/>
              <div>
              <h4>HTML</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className="experience__icon"/>
              <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className="experience__icon"/>
              <div>
              <h4>Javascript</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBootstrapFill className="experience__icon"/>
              <div>
              <h4>Bootstrap</h4>
              <small>Immidiate</small>
             </div>
            </article>
          </div>
          </div>

        {/* --------------Back-End---------------- */}
          <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <IoLogoNodejs className="experience__icon"/>
              <div>
              <h4>NodeJS</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDeno className="experience__icon"/>
              <div>
              <h4>Deno</h4>
              <small>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className="experience__icon"/>
              <div>
              <h4>My SQL</h4>
              <small>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className="experience__icon"/>
              <div>
                <h4>MongoDB</h4>
              <small>Immidiate</small>
              </div>
            </article>
          </div>
        </div>

    </div>
   
    </section>
  )
}

export default experience