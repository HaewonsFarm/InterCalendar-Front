import { createSlice } from "@reduxjs/toolkit";

export const userSessionSlice = createSlice({
  name: "userSessionSlice",
  initialState: {
    loggedIn: true,
  },
  reducers: {
    userLoggedIn: (state) => {
      state.loggedIn = true;
    },
    userLogout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { userLoggedIn, userLogout } = userSessionSlice.actions;
export default userSessionSlice.reducer;
