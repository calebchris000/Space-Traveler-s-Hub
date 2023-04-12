import { configureStore } from '@reduxjs/toolkit';
import RocketSlice from './rockets/RocketSlice';
import MissionSlice from './missions/MissionSlice.js';

const store = configureStore({
  reducer: {
    rocket: RocketSlice,
    mission: MissionSlice,
  },
});
export default store;
