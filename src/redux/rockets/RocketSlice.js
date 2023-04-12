import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable */
const initialState = {
  content: [],
  info: null,
  reserveState: {},
};

const RocketSlice = createSlice({
  name: "RocketStore",
  initialState,
  reducers: {
    apiState: (state, {payload}) => {
      return {
        ...state,
        info: payload,
      };
    },

    rocketData: (state, {payload}) => {
      return {
        ...state,
        content: payload
      }
    },

    buttonReducer: (state, {payload}) => {
      const {reserveState} = state;
      const {id, buttonText} = payload;
      return {
        ...state,
        reserveState: {
          ...reserveState,
          [id]: buttonText,
        },
      };
    },
  },
});

export const {buttonReducer, apiState, rocketData} =
  RocketSlice.actions;
export default RocketSlice.reducer;
