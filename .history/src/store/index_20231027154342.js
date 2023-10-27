import { configureStore } from '@reduxjs/toolkit';
import garageOwnerReducer from './reducers/Owner';

export const store = configureStore({
  reducer: {
    owner: garageOwnerReducer,
  },
});
