/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5MzA3MDcsImV4cCI6MTY5ODk2NjcwN30.GyyitaM2BydXGScL-Fu-HLhU8vH_XDzfD7-XcfBjZVg';
localStorage.setItem('accessToken', token);
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async () => {
  try {
    const response = await axiosInstance.get('users');
    console.log(2, response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });
  },
});
const ownerReducer = ownerSlice.reducer;
export default ownerReducer;
