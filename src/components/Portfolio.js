import React from 'react';

import boredAppImg from '../images/BoredApp.jpg';
import dailyTaskAppImg from '../images/DailyTaskApp.jpg';
import snakeGameImg from '../images/SnakeGame.jpg';

const Portfolio = () => {
  return(
    <div className="portfolio-wrapper container" id="portfolio">
      <div className="portfolio-list">
        <div className="portfolio-project">
          <a 
            href="https://eager-kalam-6403d4.netlify.app/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={boredAppImg} alt="bored app" />
          </a>
        </div>
        <div className="portfolio-project">
          <a 
            href="https://ubiquitous-torrone-aa0502.netlify.app/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={dailyTaskAppImg} alt="daily task app" />
          </a>
        </div>
        <div className="portfolio-project">
          <a 
            href="https://precious-cactus-d40834.netlify.app/" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={snakeGameImg} alt="snake game app" />
          </a>
        </div>
      </div>
    </div>
    )
}

export default Portfolio;