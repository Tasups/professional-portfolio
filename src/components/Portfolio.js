import React from 'react';

import bug_Bank from '../images/Bug_Bank.jpg';
import algoViz from '../images/algoViz.jpg';
import blog_image from '../images/blog_image.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-list">
        <div className="portfolio-project">
          <h2 className="portfolio-project-title">BUG BANK</h2>
          <a
            href="https://bug-bank.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bug_Bank} alt="bug bank" />
            {/*A bug tracker system*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">ALVIZGO</h2>
          <a
            href="https://algovizy.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={algoViz} alt="an algorithm visualizing tool" />
            {/*A algorithm visualizing tool setup with merge-sort first*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">BLOG</h2>
          <a
            href="https://webdev-whisnant-blog.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={blog_image} alt="snake game app" />
            {/*A fullstack blog using MERN*/}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;