/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
import { v4 as uuidv4 } from 'uuid';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk1MDEzNzQsImV4cCI6MTY5OTUzNzM3NH0.ojjHzu5fnMBGDKRHj2DlavLGx5x53s0S2ts1T_BpaVU';
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

export const fetchOwnersById = createAsyncThunk('owner/fetchOwnersById', async (payload) => {
  return { ...payload, id: uuidv4() };
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
  reducers: {
    // deleteOwner: (state, action) => {
    //   state.phonebooks = state.phonebooks.filter((phonebook) => phonebook.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });

    builder.addCase(fetchOwnersById.fulfilled, (state, action) => {
      state.manageOwner = action.payload;
    });

    //   builder.addCase(deleteOwners.fulfilled, (state, action) => {
    //     // state.manageOwner = action.payload;
    //     (owner) => owner.id !== action.payload.id;
    //   });
  },
});
export const { deleteOwner } = ownerSlice.actions;
const ownerReducer = ownerSlice.reducer;
export default ownerReducer;
