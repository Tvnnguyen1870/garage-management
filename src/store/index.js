import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile'
import serviceReducer from './reducers/service'
import managementReducer from './reducers/management'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    management: managementReducer,
    service: serviceReducer,
  },
})
