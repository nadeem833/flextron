import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userToken: null, 
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userToken = `${action.payload.data.access_token}`;
         
        },
        logoutSuccess: (state) => {
            state.userToken = null;
        },

    }
})
export const { logoutSuccess, loginSuccess } = authSlice.actions;

export default authSlice.reducer

// export const selectCurrentToken = (state) => initialState.userToken 
export const userToken = initialState.userToken;