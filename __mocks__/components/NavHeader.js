import { Link } from 'react-router-dom';
import '../styles/NavHeader.css';
import React from 'react';

const NavHeader = () => (
  <header>
    <div className="header_logo">
      <img className="logo" src={logo} alt="logo" />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
    <nav>
      <li key={1}><NavLink to="/">Rockets</NavLink></li>
      <li key={2}><NavLink to="/dragons">Dragons</NavLink></li>
      <li key={3}><NavLink to="/Mission">Mission</NavLink></li>
      <li key={4}><NavLink to="/My-Profile">My Profile</NavLink></li>
    </nav>
  </header>
);

export default NavHeader;
