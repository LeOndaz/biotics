import {createAsyncThunk} from "@reduxjs/toolkit";
import {isAxiosError} from "axios";
import axios from "../../utils/axios.ts";

export const login = createAsyncThunk(
  'auth/login',
  async (userData: { username: string; password: string }, {rejectWithValue}) => {
    try {
      const response = await axios.post('/auth/login', userData);
      // Assuming the response body contains the token
      return response.data.access_token;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      }
      
      return rejectWithValue(error);
    }
  }
);