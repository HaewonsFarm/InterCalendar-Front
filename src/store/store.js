import { configureStore } from "@reduxjs/toolkit";
import userSessionReducer from "./user/userSessionSlice";
import userInfoReducer from "./user/userInfoSlice";

export default configureStore({
  reducer: {
    userSession: userSessionReducer,
    userInfo: userInfoReducer,
  },
});