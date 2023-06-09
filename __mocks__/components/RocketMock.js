import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { buttonReducer } from '../../src/redux/rockets/RocketSlice';
import getRocketsMock from '../redux/rockets/RocketAPIMock';

export const Rocket = ({
  id,
  imgURL,
  title,
  description,
}) => {
  const [buttonText, setButtonText] = useState(
    'Reserve Rocket',
  );
  const { reserveState } = useSelector(
    (store) => store.rocket,
  );
  const buttonRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    reserveState.forEach((item) => {
      if (item.id === id) {
        setButtonText('Cancel Reservation');
        buttonRef.current.classList.add(
          'buttonCancel',
        );
      }
    });
  }, [id, reserveState]); // Added 'id' and 'reserveState' to dependency array

  function setButton(e) {
    if (buttonText === 'Reserve Rocket') {
      setButtonText('Cancel Reservation');
      dispatch(
        buttonReducer({ id, buttonText, title }),
      );
      e.target.classList.add('buttonCancel');
    } else {
      setButtonText('Reserve Rocket');
      dispatch(
        buttonReducer({ id, buttonText, title }),
      );
      e.target.classList.remove('buttonCancel');
    }
  }

  return (
    <div className="rocketComponent">
      <img src={imgURL} alt="rocket" />
      <span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          ref={buttonRef}
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

const MockRocketPage = () => {
  const dispatch = useDispatch();
  const { content, info } = useSelector(
    (store) => store.rocket,
  );
  useEffect(() => {
    dispatch(getRocketsMock());
  }, [dispatch]);

  if (info === 'success') {
    return content.map((rocket) => (
      <Rocket
        key={rocket.id}
        id={rocket.id}
        imgURL={rocket.flickr_images[1]}
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

export default MockRocketPage;
