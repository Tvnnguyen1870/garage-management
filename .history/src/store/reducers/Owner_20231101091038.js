/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.sevrice';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: {},
};
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkYTBhNDAzLWRiOWYtNDAyZC1hOGUzLTM1NjZhN2JiMmVjZiIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg3NTE3MDcsImV4cCI6MTY5ODc4NzcwN30.AYNHlTcDtDD9Z0DWD3fc2KeW9080hfAoW_mD304of3c';
localStorage.setItem('accessToken', token);
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async () => {
  try {
    const response = await axiosInstance.get('users');
    return response.data.data;
  } catch (error) {
    throw error;
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
