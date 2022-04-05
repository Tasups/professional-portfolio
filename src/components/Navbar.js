import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h1>WEBDEV WHISNANT</h1>
      </div>

      <div className="nav-links">
        <a href="#home" alt="Home">
          Home
        </a>
        <a href="#about" alt="About Me">
          About Me
        </a>
        <a href="/" alt="Portfolio">
          Portfolio
        </a>
        <a href="#contacts" alt="Contacts">
          Contacts
        </a>
      </div>
    </nav>
  );
}

export default Navbar;