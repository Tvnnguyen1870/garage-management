// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
    
// }

<<<<<<< HEAD
// export const profileSlice = createSlice({
//     name: 'article',
//     initialState,
//     reducers: {
=======
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg5MTEzMTIsImV4cCI6MTY5ODk0NzMxMn0.dpNue7ArMnCohBdxtBsbTPQ7PjVFBmPeSGaemFETKIQ';
localStorage.setItem('accessToken', token)

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        try {
            const result = await axiosInstance('auth/profile')
            return result.data.data;
        } catch (error) {
            console.log(error);
        }
    }
)
>>>>>>> 80f7f3da9c1de96378edeb6e30d7568f34c8429e
        
//     },
// })

// // Action creators are generated for each case reducer function
// export const { } = profileSlice.actions;

<<<<<<< HEAD
// const profileReducer = profileSlice.reducer;
=======
// Action creators are generated for each case reducer function
export const { addProfile } = profileSlice.actions;
>>>>>>> 80f7f3da9c1de96378edeb6e30d7568f34c8429e

// export default profileReducer