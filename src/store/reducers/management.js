import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";

const initialState = {
    management: null,
    garageById: null,

}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxYzM1M2Q1LWQxOGMtNGJjOC05MWQ2LWI1ZjM5Mzk5ZjljMyIsImVtYWlsIjoibmhvbTJAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaMOzbSAyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzAwMDQzNDg5LCJleHAiOjE3MDAwNzk0ODl9.F1K7YsyPqlgs4A7qLbhUUDXUkWTt3xHG5Bdx-TZdpuU';

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
      const result = await axiosInstance(`garages/${payload}`, {
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
        });
        builder.addCase(fetchGarageById.fulfilled, (state, action) => {
            state.garageById = action.payload;
          });
    }
})

// Action creators are generated for each case reducer function
export const { removeManagement } = managementSlice.actions;

const managementReducer = managementSlice.reducer;

export default managementReducer