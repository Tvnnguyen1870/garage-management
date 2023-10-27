import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  owner: [],
};

export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {},
});

export const {} = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
