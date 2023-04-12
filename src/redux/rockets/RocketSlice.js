import { createSlice } from '@reduxjs/toolkit';
/* eslint-disable */
const initialState = {
  content: [],
  info: null,
  reserveState: [],
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
        content: payload,
      };
    },

    buttonReducer: (state, {payload}) => {
      const {reserveState} = state;
      const {id, buttonText, title} = payload;
      if (buttonText === "Cancel Reservation") {
        return {
          ...state,
          reserveState: reserveState.filter(item => item.id === id && item[buttonText] !== 'Cancel Reservation'),
        };
      }
      return {
        ...state,
        reserveState: [
          ...reserveState,
          {id, title, buttonText},
        ],
      };
    },
  },
});

export const {
  buttonReducer,
  apiState,
  rocketData,
} = RocketSlice.actions;
export default RocketSlice.reducer;
