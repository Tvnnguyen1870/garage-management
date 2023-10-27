import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  owner: [],
};

export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
});
