/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
// import { v4 as uuidv4 } from 'uuid';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
  ownerIdData: null,
  createOwnerData: {
    email: '',
    password: '',
    fullName: '',
    phoneName: '',
    gender: '',
    role: '',
    dob: '',
    garageIds: [],
  },
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxYzM1M2Q1LWQxOGMtNGJjOC05MWQ2LWI1ZjM5Mzk5ZjljMyIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaMOzbSAyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAwMDU3NTQ5LCJleHAiOjE3MDAwOTM1NDl9.Y0ri7i0v2zCWOZducGK50CzBXTCEiaiIMPrB3Itzpgc';
localStorage.setItem('accessToken', token);
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async () => {
  try {
    const response = await axiosInstance.get('/users');

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

// export const AddOwner = createAsyncThunk('owner/AddOwner', async () => {
//   try {
//     const response = await axiosInstance.post('user');
//     const he = response.data.data.items;
//     console.log('he', he);
//     return response.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const fetchOwnersById = createAsyncThunk('owner/fetchOwnersById', async (payload) => {
//   try {
//     const response = await axiosInstance.get('users');
//     return { ...payload, id: uuidv4() };
//   } catch (error) {
//     console.log(error);
//   }
// });
export const deleteOwners = createAsyncThunk('owner/deleteOwners', async () => {
  try {
    const response = await axiosInstance.delete('users');
    console.log(4, response.data.data);
    return response.data.data.id;
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
    builder.addCase(fetchOwnersById.fulfilled, (state, action) => {
      state.ownerByIdData = action.payload;
    });

    builder.addCase(deleteOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
      (owner) => owner.id !== action.payload.id;
    });
  },
});
export const { removeOwner } = ownerSlice.actions;
const ownerReducer = ownerSlice.reducer;
export default ownerReducer;
