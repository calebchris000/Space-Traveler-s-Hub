import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: [],
  info: null,
  reserveState: {},
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
      const { reserveState } = state;
      const { id, missionText } = payload;
      return {
        ...state,
        reserveState: {
          ...reserveState,
          [id]: missionText,
        },
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
