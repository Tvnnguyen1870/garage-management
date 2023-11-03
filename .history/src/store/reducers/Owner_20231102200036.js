/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: {},
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg4NTAzMjYsImV4cCI6MTY5ODg4NjMyNn0.0A5Qj4YlNA6i5JsyM7tCutLVR2xrcLKKmq3qDePsOn4';
localStorage.setItem('accessToken', token);
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async () => {
  try {
    const response = await axiosInstance.get('users');
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
