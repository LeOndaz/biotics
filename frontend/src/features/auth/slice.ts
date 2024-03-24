import {createSlice} from '@reduxjs/toolkit';
import {login} from "./thunks.ts";

interface AuthState {
  status: 'no-auth' | 'loading' | 'failed' | 'auth';
}

const initialState: AuthState = {
  status: 'no-auth',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.status = 'no-auth';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state) => {
        state.status = 'auth';
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
