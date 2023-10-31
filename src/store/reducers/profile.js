import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios.service";
import { isRouteErrorResponse } from "react-router-dom";

const initialState = {
    profiles: [],
}

// export const getProfile = createAsyncThunk(
//     'profile/getProfile',
//     async () => {
//         const result = await axiosInstance.get('auth/profile')
//             .then(function(response) {
//                 console.log(response);
//                 return response.data;
//             })
//             .then(function(profiles) {
//                 var htmls = profiles.map(function(profile){
//                     return `<p>${profile.name}</p>`
//                 })

//                 var html = htmls.join(''); 
//                 document.getElementsByClassName('api-return').innerHTML = html;
//             })
//             console.log(result);
//         return result; 
//     }
// )

// export const getProfile = async () => {
//     const result = await fetch('http://3.1.40.228:3500/auth/profile')
//         .then(function (response) {
//             console.log(response);
//             return response.data
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
//         return result
// }

axiosInstance.get('auth/profile')
        .then(function (response) {
            console.log(response);
            console.log(response.data.data);
            return isRouteErrorResponse;
        })
        .then(function (profile) {
            console.log(profile);
        })
        



export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profiles.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateProfile } = profileSlice.actions;

const profileReducer = profileSlice.reducer;

export default profileReducer