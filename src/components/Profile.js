import React from 'react';
import '../styles/Profile.css';

const Profile = () => (
  <div className="Profile-holder">
    <h2>My Profile</h2>
    <div className="main">
      <div className="Missions">
        <h4>My Missions</h4>
        <div className="list">
          <p>Astro-1</p>
          <p>Dawn</p>
          <p>Epoxi</p>
          <p>Fast</p>
          <p>Hubble</p>
        </div>
      </div>
      <div className="Rockets">
        <h4>My Rockets</h4>
        <div className="list">
          <p>New Glenn</p>
          <p>Space Launch System</p>
          <p>Terran 1</p>
          <p>SpaceX Starship</p>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
