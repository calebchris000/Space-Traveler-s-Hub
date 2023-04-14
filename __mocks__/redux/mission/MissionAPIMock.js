/* eslint-disable */
import {
  missionApiState,
  missionData,
} from './MissionSliceMock';

const missionAPI = 'https://api.spacexdata.com/v3/missions';

const getMissionMock = () => (dispatch) => {
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

export default getMissionMock;
