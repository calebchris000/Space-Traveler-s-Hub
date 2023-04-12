import '../styles/Mission.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { missionButtonReducer } from '../redux/missions/MissionSlice';
import getMission from '../redux/missions/MissionAPI';

const Mission = ({
  id,
  mission,
  description,
}) => {
  const member = useRef(null);
  const dispatch = useDispatch();
  const [missionText, setMissionText] = useState(
    'Join Mission',
  );
  const [status, setStatus] = useState('NOT A MEMBER');

  function setMissionButton(e) {
    if (missionText === 'Join Mission') {
      setMissionText('Leave Mission');
      setStatus('ACTIVE MEMBER');
      member.current.classList.add('activeMember');
      dispatch(
        missionButtonReducer({ id, missionText, status }),
      );
      e.target.classList.add('leaveMission');
    } else {
      setMissionText('Join Mission');
      setStatus('NOT A MEMBER');
      member.current.classList.remove('activeMember');
      e.target.classList.remove('leaveMission');
      dispatch(
        missionButtonReducer({ id, missionText, status }),
      );
    }
  }

  return (
    <section className="missionWrapper">
      <div className="data-row">
        <h3>{mission}</h3>
        <p>{description}</p>
        <p ref={member} className="member">{status}</p>
        <button
          className="missionButton"
          onClick={(e) => setMissionButton(e)}
          type="button"
        >
          {missionText}
        </button>
      </div>
    </section>
  );
};

const MissionPage = () => {
  const dispatch = useDispatch();
  const { content } = useSelector((store) => store.mission);
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);
  return (
    <>
      <div className="titleRow">
        <h3>Mission</h3>
        <h3>Description</h3>
        <h3>Status</h3>
        <h3>.</h3>
      </div>

      {content.map((data) => (
        <Mission
          key={data.mission_id}
          id={data.mission_id}
          mission={data.mission_name}
          description={data.description}
          buttonStatus="Join Mission"
        />
      ))}
    </>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionPage;
