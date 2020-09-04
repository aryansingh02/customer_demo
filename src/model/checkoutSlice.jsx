// @flow
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Checkout} from "./dataModel";

let initialState: Checkout = {
  phoneNumber: "",
  invoice: {},
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setPhone(state, action: PayloadAction<string>) {
      console.log("action", action);
      state.phoneNumber = action.payload.phone;
    },
    // Called from ViewCartButton and CartSummary button.
    setInvoice(state, action: PayloadAction<string>) {
      state.invoice = action.payload;
    },
  },
});

export const {setPhone, setInvoice} = checkout.actions;

export default checkout.reducer;
