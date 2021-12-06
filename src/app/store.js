import { configureStore } from '@reduxjs/toolkit';
import marsReducer from '../components/mars/marsSlice';
import roverReducer from '../components/rover/roverSlice';

export const store = configureStore({
  reducer: {
    marsGrid: marsReducer,
    rover: roverReducer,
  },
});
