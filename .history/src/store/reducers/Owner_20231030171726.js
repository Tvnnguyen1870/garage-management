import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
const initialState = {
  owners: [],
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

export const { addOwner, owners } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
