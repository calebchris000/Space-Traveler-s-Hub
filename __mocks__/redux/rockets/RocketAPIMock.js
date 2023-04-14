/* eslint-disable */
import { apiState, rocketData } from '../../../src/redux/rockets/RocketSlice';

const rocketApi = 'https://api.spacexdata.com/v4/rockets';

const getRocketsMock = () => (dispatch) => {
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

export default getRocketsMock;
