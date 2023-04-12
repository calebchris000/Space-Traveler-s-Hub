import React from 'react';
import '../styles/Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { reserveState } = useSelector(
    (store) => store.rocket,
  );

  return (
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
            {reserveState.map((reserved) => (
              <p key={reserved.id}>{reserved.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
