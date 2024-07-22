import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../config/configSlice";
import create from "prompt-sync";

export const registerUser = createAsyncThunk("auth/registerUser", async (UserData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/user/register`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/user/login`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/user.logout`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: true,
    error: null,
    user: null,
    /*
    user: {
      userName: "UserOne",
      userNameFirst: "U",
      groupNum: 5,
    },
    */
    // isAuthenticated: false,
    // user: {
    //   userName: null,
    //   userNameFirst: null,
    //   groupNum: null,
    // },
  },

  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      // user = action.payload;
      state.user = action.payload;
    },
    logout: (state/*, action*/) => {
      state.isAuthenticated = false;
      // user = null;
      state.user = null;
      axios.get(`${BACKEND_ENDPOINT}/user/logout`);
    },
  },
  
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
    .addCase(loginUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    })
    .addCase(logoutUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.status = "succeeded";
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(logoutUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
