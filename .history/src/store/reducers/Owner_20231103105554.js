/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5ODAzNzcsImV4cCI6MTY5OTAxNjM3N30.vevWP5taGQ9PCqDUytHRXrdZ_uu9I4R7OLb-5_Vdba4';
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

export const DeleteOwners = createAsyncThunk('owner/fetchOwners', async () => {
  const response = await axiosInstance.deletew('users');
  console.log(3, response.data.data);
  return response.data.data;
});

const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    deleteOwner: (state, action) => {
      state.phonebooks = state.phonebooks.filter((phonebook) => phonebook.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });
  },
});
export const { deleteOwner } = ownerSlice.actions;
const ownerReducer = ownerSlice.reducer;
export default ownerReducer;
