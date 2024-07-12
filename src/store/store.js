import { configureStore } from "@reduxjs/toolkit";
import userSessionReducer from "./user/userSessionSlice";
import userInfoReducer from "./user/userInfoSlice";
import calendarReducer from "../redux/reducers/calendarReducer";

const store = configureStore({
  reducer: {
    userSession: userSessionReducer,
    userInfo: userInfoReducer,
    calendar: calendarReducer,
  },
});

export default store;
