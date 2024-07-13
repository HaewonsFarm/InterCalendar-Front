import { configureStore } from "@reduxjs/toolkit";
import userSessionReducer from "./user/userSessionSlice";
import userInfoReducer from "./user/userInfoSlice";
import calendarReducer from "../redux/reducers/calendarReducer";
import groupReducer from "../redux/groupSlice";
import itemReducer from "../redux/itemSlice";

const store = configureStore({
  reducer: {
    userSession: userSessionReducer,
    userInfo: userInfoReducer,
    calendar: calendarReducer,
    group: groupReducer,
    item: itemReducer,
  },
});

export default store;
