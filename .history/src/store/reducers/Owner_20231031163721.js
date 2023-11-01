import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
const initialState = {
  owners: [],
};

export const api = axiosInstance
  .get('/users')
  .then(function (response) {
    console.log('res', response);
    return response.data;
  })
  .then(function (error) {
    console.log('error', error);
  });

export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    addOwner: (state, action) => {
      state.phonebooks.push(action.payload);
    },
  },
});

export const { addOwner, owners } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
