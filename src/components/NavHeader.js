import { Link } from 'react-router-dom';
import '../styles/NavHeader.css';
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import planetImg from '../public/planet2.png';

const NavHeader = () => {
  const urls = [
    {
      id: 1,
      url: '/rocket',
      text: 'Rocket',
    },
    {
      id: 2,
      url: '/mission',
      text: 'Missions',
    },
    {
      id: 3,
      url: '/Profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navbar">
      <img src="3212580.png" className="PlantImg" alt="Planet-img" />
      <h1 className="nav-heading">Space Travelers Hub</h1>

      <ul className="nav-main">
        {urls.map((url) => (
          <li className="nav-items" key={url.id}>
            <Link to={url.url}>{ url.text }</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
