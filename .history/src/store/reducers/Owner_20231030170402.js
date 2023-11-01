import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
const initialState = {
  owners: axiosInstance.get('/users', {
    params: {
      email: 'huynh@gmail.com',
      password: 'huynh',
      fullName: 'huynh',
      phoneNumber: '0123456789',
      gender: 'Male',
      role: 'user',
      dob: '30/10/2023',
      garageIds: ['TLS', 'AHC'],
    },
  }),
};

export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    addOwner: (state, action) => {
      state.phonebooks.push(action.payload);
    },
  },
});

export const { addOwner } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
