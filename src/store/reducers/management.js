import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    management: null,
}

<<<<<<< HEAD
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk5NDkyMDksImV4cCI6MTY5OTk4NTIwOX0.rG3rIV5ocEFJHIgju-W3rWWpPNewWw6RxWVY_rFlesE';
=======
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJuZ3V5ZW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTk4NDg4MzMsImV4cCI6MTY5OTg4NDgzM30.XDse2fHbzVlM3o116AXY4KQgbrQI-XTYv4sPhmkt2p8';
>>>>>>> fa874b2a51be27faa8c603a5037b96febef08ca4

localStorage.setItem('accessToken', token)

export const getManagement = createAsyncThunk(
    'management/getManagement',
    async (payload) => {
        try {
            const result = await axiosInstance.get('users', {
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
      const result = await axiosInstance(`users/${payload.id}`, {
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