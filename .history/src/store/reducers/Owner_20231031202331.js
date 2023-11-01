import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  owners: [],
};
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg3NDQ4MzQsImV4cCI6MTY5ODc4MDgzNH0.PXbDvbYMEy_ho0MiS1nzBW2N4DLCnKyPlweBo-ug6mw';
localStorage.setItem('accessToken', token);

export const getOwner = createAsyncThunk('owner/getOwner', async () => {
  try {
    const result = await axiosInstance('users');
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOwner.fulfilled, (state, actions) => {
      state.owners = actions.payload;
    });
  },
});

export const { addOwner } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
