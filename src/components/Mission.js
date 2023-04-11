import '../styles/Mission.css';
import PropTypes from 'prop-types';
import mission from './missionData';

const Mission = ({
  mission,
  description,
  status,
  buttonStatus,
}) => (
  <section className="missionWrapper">
    <div className="data-row">
      <h3>{mission}</h3>
      <p>{description}</p>
      <p className="member">{status}</p>
      <button type="button">
        {buttonStatus}
      </button>
    </div>
  </section>
);

const MissionPage = () => (
  <>
    <div className="titleRow">
      <h3>Mission</h3>
      <h3>Description</h3>
      <h3>Status</h3>
      <h3>.</h3>
    </div>

    {mission.map((data) => (
      <Mission
        key={data.mission_id}
        mission={data.mission_name}
        description={data.description}
        status="NOT A MEMBER"
        buttonStatus="Join Mission"
      />
    ))}
  </>
);

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  buttonStatus: PropTypes.string.isRequired,
};

export default MissionPage;
