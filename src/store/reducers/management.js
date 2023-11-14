import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    management: null,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5NTE4NjIsImV4cCI6MTY5OTk4Nzg2Mn0.0FPKLl0NZGLosf_PKZuO57JbFrTRWZQp_j32C0XhSA0';

localStorage.setItem('accessToken', token)

export const getManagement = createAsyncThunk(
    'management/getManagement',
    async (payload) => {
        try {
            const result = await axiosInstance.get('garages', {
                params: payload,
            })
            return result.data.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchGarageById = createAsyncThunk('management/fetchGarageById', async (payload) => {
    try {
      const result = await axiosInstance(`garages/${payload.id}`, {
        params: payload,
      });
      return result.data.data.items;
    } catch (error) {
      console.log(error); 
    }
  });
        
export const managementSlice = createSlice({
    name: 'management',
    initialState,
    reducers: {
        removeManagement: (state, action) => {
            const index = state.management.findIndex((management) => management.id === action.payload.id);
            if (index !== -1) {
                state.management.splice(index, 1);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getManagement.fulfilled, (state, actions) => {
            state.management = actions.payload;
        })
    }
})

// Action creators are generated for each case reducer function
export const { removeManagement } = managementSlice.actions;

const managementReducer = managementSlice.reducer;

export default managementReducer