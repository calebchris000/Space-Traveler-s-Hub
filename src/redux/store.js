import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import RocketSlice from './rockets/RocketSlice';
import MissionSlice from './missions/MissionSlice';

const store = configureStore({
  reducer: {
    rocket: RocketSlice,
    mission: MissionSlice,
  },
  middleware: [createLogger(), thunk],
});
export default store;
