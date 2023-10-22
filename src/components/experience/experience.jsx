import React from 'react'
import './experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import {IoLogoCss3,IoLogoJavascript,IoLogoNodejs} from 'react-icons/io'

import {FaReact} from 'react-icons/fa'
import {
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* --------------Front-End------------------- */}
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className="experience__icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiRedux className="experience__icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__icon" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
          </div>
        </div>

        {/* --------------Back-End---------------- */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__icon" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiDotnet className="experience__icon" />
              <div>
                <h4>Dotnet</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="experience__icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <img
                alt="logo"
                src="https://www.sanity.io/static/images/favicons/apple-icon-180x180.png"
                className="experience__icon_sanity"
                style={{
                  width: "15px",
                  height: "15px",
                  color: "#4db5ff",
                }}
              />
              <div>
                <h4>Sanity</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience