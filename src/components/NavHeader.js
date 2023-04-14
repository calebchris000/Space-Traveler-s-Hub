import '../styles/NavHeader.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to={url.url}
              activeClassName="active"
              exact
            >
              {url.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
