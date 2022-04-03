import React from 'react';

import background from '../images/portfoliobg.png';

const Header = () => {
  return (
    <div className="header-wrapper">
      <img className="header-background-image" src={background} alt="coffee and computer" />
    </div>
  );
}

export default Header;