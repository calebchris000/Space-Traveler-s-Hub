import '../styles/Rocket.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { buttonReducer } from '../redux/rockets/RocketSlice';
import getRockets from '../redux/RocketAPI';

const Rocket = ({
  id,
  imgURL,
  title,
  description,
}) => {
  const [buttonText, setButtonText] = useState(
    'Reserve Rocket',
  );
  const dispatch = useDispatch();
  function setButton(e) {
    if (buttonText === 'Reserve Rocket') {
      setButtonText('Cancel Reservation');
      dispatch(buttonReducer({ id, buttonText }));
      e.target.classList.add('buttonCancel');
    } else {
      setButtonText('Reserve Rocket');
      e.target.classList.remove('buttonCancel');
      dispatch(buttonReducer({ id, buttonText }));
    }
  }

  return (
    <div className="rocket-component">
      <img src={imgURL} alt="rocket" />
      <span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          onClick={(e) => setButton(e)}
          className="reserve"
          type="button"
        >
          {buttonText}
        </button>
      </span>
    </div>
  );
};

const RocketPage = () => {
  const dispatch = useDispatch();
  const { content, info } = useSelector(
    (store) => store.rocket,
  );
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  if (info === 'success') {
    return content.map((rocket) => (
      <Rocket
        key={rocket.id}
        id={rocket.id}
        imgURL={rocket.flickr_images}
        title={rocket.name}
        description={rocket.description}
      />
    ));
  }
  return (
    <>
      <p>LOADING</p>
    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RocketPage;
