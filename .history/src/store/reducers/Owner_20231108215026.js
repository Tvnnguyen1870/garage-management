/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';
const initialState = {
  manageOwner: null,
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk0NDA2OTYsImV4cCI6MTY5OTQ3NjY5Nn0.tl9N7OsePeWu_GvoPsS2B8Ahx3g7YQi0QU26MuXFHlM';
localStorage.setItem('accessToken', token);
export const fetchOwners = createAsyncThunk('owner/fetchOwners', async () => {
  try {
    const response = await axiosInstance.get('users');

    const he = response.data.data.items;
    console.log('he', he);
    return he;
  } catch (error) {
    console.log(error);
  }
});
export const AddOwner = createAsyncThunk('owner/AddOwner', async () => {
  try {
    const response = await axiosInstance.post('user');

    console.log(6, response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
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
  reducers: {
    // deleteOwner: (state, action) => {
    //   state.phonebooks = state.phonebooks.filter((phonebook) => phonebook.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwners.fulfilled, (state, action) => {
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
