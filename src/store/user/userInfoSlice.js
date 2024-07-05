import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfoSlice",
  //   initialState: {
  //     userName: "",
  //     userNameFirst: "",
  //     groupNum: 0,
  //   },

  initialState: {
    userName: "UserOne",
    userNameFirst: "U",
    groupNum: 5,
  },
  reducers: {
    updateUser: (state, action) => {
      state.userName = action.payload.userName; // payload 안에 userName이 들어있어야 함.
      state.userNameFirst = action.payload.userName[0];
      state.groupNum = action.payload.groupNum; // payload 안에 groupNum이 들어있어야 함.
    },
  },
});

export const { updateUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;