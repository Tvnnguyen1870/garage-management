import { createSlice } from '@reduxjs/toolkit';
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

export const { addOwner } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
