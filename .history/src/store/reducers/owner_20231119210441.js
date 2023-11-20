/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
// import { v4 as uuidv4 } from 'uuid';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxYzM1M2Q1LWQxOGMtNGJjOC05MWQ2LWI1ZjM5Mzk5ZjljMyIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaMOzbSAyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAwMzk4MzU4LCJleHAiOjE3MDA0MzQzNTh9.uRkzUMu_v7Qe6hXS5hs1c32M4M_9SUYZsKdBUCG_mno';
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

export const fetchOwnersById = createAsyncThunk('owner/fetchOwnersById', async (payload) => {
  try {
    const response = await axiosInstance.get(`/users/${payload}`);

    console.log(12, response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const createNewOwner = createAsyncThunk('owner/createNewOwner', async (ownerData) => {
  try {
    const response = await axiosInstance.post('users', ownerData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// export const deleteOwners = createAsyncThunk('owner/deleteOwners', async () => {
//   try {
//     const response = await axiosInstance.delete('users');
//     console.log(4, response.data.data);
//     return response.data.data.id;
//   } catch (error) {
//     console.log(error);
//   }
// });
const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });
    builder.addCase(fetchOwnersById.fulfilled, (state, action) => {
      state.ownerByIdData = action.payload;
    });
  },
});
export const { removeOwner } = ownerSlice.actions;
const ownerReducer = ownerSlice.reducer;
export default ownerReducer;
