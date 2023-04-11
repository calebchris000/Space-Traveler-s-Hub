import '../styles/Rocket.css';
import PropTypes from 'prop-types';
import data from './rocketData';

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
      <button className="reserve" type="button">{buttonText}</button>
    </span>
  </div>
);

const RocketPage = () => (
  data.map((rocket) => (
    <Rocket
      key={rocket.id}
      imgURL={rocket.flickr_images}
      title={rocket.name}
      description={rocket.description}
      buttonText="Reserve Rocket"
    />
  ))
);

Rocket.propTypes = {
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default RocketPage;
