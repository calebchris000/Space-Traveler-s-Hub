import axios from 'axios';
import { apiState, rocketData } from './rockets/RocketSlice';

const rocketApi = 'https://api.spacexdata.com/v4/rockets';

const getRockets = () => (dispatch) => {
  dispatch(apiState('pending'));

  axios.get(rocketApi)
    .then((response) => {
      dispatch(apiState('success'));
      dispatch(rocketData(response.data));
    })
    .catch((error) => {
      dispatch(apiState(error));
    });
};

export default getRockets;
