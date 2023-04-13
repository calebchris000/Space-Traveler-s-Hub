import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMock = () => {
  const { reserveState } = useSelector(
    (store) => store.rocket,
  );
  const { missionReserve } = useSelector(
    (store) => store.mission,
  );

  return (
    <div className="Profile-holder">
      <h2>My Profile</h2>
      <div className="main">
        <div className="Missions">
          <h4>My Missions</h4>
          <div className="list">
            {missionReserve.map((mission) => (
              <p key={mission.id}>{mission.mission}</p>
            ))}
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
export default ProfileMock;
