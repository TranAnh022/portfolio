import React from "react";
import "./portfolio.css";
import YelpCamp from "../../assests/YelpCamp.png";
import PingPong from "../../assests/PingPong.png";
import MuseumCandy from "../../assests/museumCandy.png";
import Eshop from "../../assests/e-shop.png";
import Netflix_Clone from "../../assests/netflix_clone.png";
import Galaxy_Travel from "../../assests/galaxy_travel.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={YelpCamp} alt="" />
          </div>
          <h2>Yelp Camp</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/YelpCamp"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://yelpcamp-app-w84c.onrender.com/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={MuseumCandy} alt="" />
          </div>
          <h2>Museum Candy</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/MuseumCandy"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://eloquent-pare-1c3c31.netlify.app/#"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={PingPong} alt="" />
          </div>
          <h2>PingPong Scroce</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/ScoreKeeper-DOM"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://compassionate-torvalds-a13e9d.netlify.app"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={Eshop} alt="" />
          </div>
          <h2>E-commerce Shop</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/amazon_clone"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://graceful-sorbet-9a77c7.netlify.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={Netflix_Clone} alt="" />
          </div>
          <h2>Netflix Clone</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/NETFLIX_Clone"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://netflix-42495.web.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-img">
            <img src={Galaxy_Travel} alt="" />
          </div>
          <h2>Galaxy Travel</h2>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TranAnh022/react-galaxy-travel"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://helpful-frangipane-152d76.netlify.app/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
