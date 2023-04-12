import axios from 'axios';

import {
  missionApiState,
  missionData,
} from './MissionSlice';

const missionAPI = 'https://api.spacexdata.com/v3/missions';

const getMission = () => (dispatch) => {
  dispatch(missionApiState('pending'));

  axios
    .get(missionAPI)
    .then((response) => {
      dispatch(missionData(response.data));
      dispatch(missionApiState('success'));
    })
    .catch((error) => {
      dispatch(missionApiState('error'));
      dispatch(missionApiState(error));
    });
};

export default getMission;
