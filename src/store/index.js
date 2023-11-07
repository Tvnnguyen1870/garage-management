import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profile'
import passwordReducer from './reducers/changepassword'

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    password: passwordReducer,
    
  },
})
