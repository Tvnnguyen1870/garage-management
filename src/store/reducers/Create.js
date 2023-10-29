import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  create: [],
};

export const garageCreateSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    addOwner: (state, action) => {
      state.phonebooks.push(action.payload);
    },
  },
});

export const { addOwner } = garageCreateSlice.actions;

const garageCreateReducer = garageCreateSlice.reducer;

export default garageCreateReducer;
