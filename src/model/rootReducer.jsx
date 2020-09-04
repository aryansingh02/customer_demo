// @flow
import {combineReducers} from "redux";
import shoppingCart from "./cartSlice";
import sleekEventState from "./eventSlice";
import checkoutState from "./checkoutSlice";
import userInfo from "./userSlice";
import sleekStallState from "./stallSlice";
import userDemoState from "./userDemoSlice";

export const rootReducer = combineReducers({
  shoppingCart,
  sleekEventState,
  sleekStallState,
  checkoutState,
  userInfo,
  userDemoState,
});
