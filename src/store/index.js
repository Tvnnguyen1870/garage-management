import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile'
import serviceReducer from './reducers/garageservice'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    service: serviceReducer
  },
})
