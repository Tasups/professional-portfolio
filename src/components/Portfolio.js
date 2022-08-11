import React from 'react';

import bug_Bank from '../images/Bug_Bank.jpg';
import dailyTaskAppImg from '../images/DailyTaskApp.jpg';
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
          <h2 className="portfolio-project-title">DAILY TASK APP</h2>
          <a
            href="https://yesitisa-todo-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dailyTaskAppImg} alt="daily task app" />
            {/*Internal data sets React's state in this simple CRUD application*/}
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