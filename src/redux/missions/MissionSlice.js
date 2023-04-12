import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: [],
  info: null,
  missionReserve: [],
  memberState: {},
};

const MissionSlice = createSlice({
  name: 'MissionStore',
  initialState,
  reducers: {
    missionApiState: (state, { payload }) => ({
      ...state,
      info: payload,
    }),
    missionData: (state, { payload }) => ({
      ...state,
      content: payload,
    }),

    missionButtonReducer: (state, { payload }) => {
      const { missionReserve } = state;
      const { id, missionText, mission } = payload;
      if (missionText === 'Leave Mission') {
        return {
          ...state,
          missionReserve: missionReserve.filter((item) => item.id !== id),
        };
      }
      return {
        ...state,
        missionReserve: [
          ...missionReserve,
          { id, missionText, mission },
        ],
      };
    },
  },
});

export const {
  missionApiState,
  missionData,
  missionButtonReducer,
} = MissionSlice.actions;

export default MissionSlice.reducer;
