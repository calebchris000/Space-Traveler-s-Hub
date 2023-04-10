import PropTypes from 'prop-types';

const Rocket = ({
  imgURL,
  title,
  description,
  buttonText,
}) => (
  <div className="rocket-component">
    <img src={imgURL} alt="rocket" />
    <span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button">{buttonText}</button>
    </span>
  </div>
);

const RocketPage = () => (
  <Rocket
    imgURL="https://i.imgur.com/DaCfMsj.jpg"
    title="Falcon 1"
    description="The fastest ship"
    buttonText="Reserve Rocket"
  />
);

Rocket.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RocketPage;
