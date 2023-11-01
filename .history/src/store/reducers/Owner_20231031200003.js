import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  owners: [],
};

export const api = axiosInstance
  .get('users')
  .then(function (response) {
    console.log('res', response);
    return response.data;
  })
  .then(function (error) {
    console.log('error', error);
  });

export const ownerPosts = createAsyncThunk('', async (payload, thunkAPI) => {
  //call api
  const response = await fetch('users');
  const result = await response.json;
  console.log(result);
  return result;
});
export const garageOwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    addOwner: (state, action) => {
      state.phonebooks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ownerPosts.fulfilled, (state, action) => {
      console.log({ state, action });
      state.posts = action.payload;
    });
  },
});

export const { addOwner } = garageOwnerSlice.actions;

const garageOwnerReducer = garageOwnerSlice.reducer;

export default garageOwnerReducer;
