import React from 'react';

import boredAppImg from '../images/BoredApp.jpg';
import dailyTaskAppImg from '../images/DailyTaskApp.jpg';
import snakeGameImg from '../images/SnakeGame.jpg';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-list">
        <div className="portfolio-project">
          <h2 className="portfolio-project-title">BORED? APP</h2>
          <a
            href="https://eager-kalam-6403d4.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={boredAppImg} alt="bored app" />
            {/*Using an API, with controlled requests, filtered by preset inputs*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">DAILY TASK APP</h2>
          <a
            href="https://ubiquitous-torrone-aa0502.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dailyTaskAppImg} alt="daily task app" />
            {/*Internal data sets React's state in this simple CRUD application*/}
          </a>
        </div>

        <div className="portfolio-project">
          <h2 className="portfolio-project-title">SNAKE GAME</h2>
          <a
            href="https://precious-cactus-d40834.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snakeGameImg} alt="snake game app" />
            {/*A simple game mostly using method arrays and useRef hook*/}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;