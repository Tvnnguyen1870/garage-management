import { configureStore } from '@reduxjs/toolkit';
import garageOwnerReducer from './reducers/Owner';
import garageCreateReducer from './reducers/Create';

export const store = configureStore({
  reducer: {
    owner: garageOwnerReducer,
    create: garageCreateReducer,
  },
});
