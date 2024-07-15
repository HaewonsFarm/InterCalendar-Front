import { configureStore } from "@reduxjs/toolkit";
import userSessionReducer from "./user/userSessionSlice";
import userInfoReducer from "./user/userInfoSlice";
import calendarReducer from "../redux/calendarSlice";
import groupReducer from "../redux/groupSlice";
import itemReducer from "../redux/itemSlice";
import configReducer from "./config/configSlice"

const store = configureStore({
  reducer: {
    userSession: userSessionReducer,
    userInfo: userInfoReducer,
    calendar: calendarReducer,
    group: groupReducer,
    item: itemReducer,
    config : configReducer
  },
});

export default store;
