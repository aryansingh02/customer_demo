// @flow
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {UserInfo} from "./dataModel";
import {FindOrder} from "../util";

let initialState: UserInfo = {
  phoneNumber: "",
  orders: [],
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    resetUser(state, action: PayloadAction<string>) {
      state.phoneNumber = "";
      state.orders = [];
    },
    setUserPhone(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload.phone;
    },
    addOrder(state, action: PayloadAction<string>) {
      state.orders.push(action.payload.order);
    },
    modifyOrder(state, action: PayloadAction<string>) {
      let orderIndex = FindOrder(state.orders, action.payload.order._id);
      if (orderIndex !== -1) {
        state.orders[orderIndex] = action.payload.order;
      } else {
        state.orders.push(action.payload.order);
      }
    },
  },
});

export const {
  resetUser,
  addOrder,
  modifyOrder,
  setUserPhone,
} = userInfo.actions;

export default userInfo.reducer;
