// @flow
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {
  Cart,
  CartItem,
  DynamicSetting,
  LineItem,
  MenuItem,
  Money,
} from "./dataModel";
import {DeleteLineItemFromCart, FindLineItem, UpdateItemInCart} from "../util";

// export type Cart = {
//   stallId: string,
//   storeId: string,
//   lineItems: Array<LineItem>,
//   // Free form note.
//   note: string,
//   requestedEta: number,
//   requestedDynamicFee: Money,
// };

let initialState: Cart = {
  lineItems: [],
  stallId: "",
  storeId: "",
  note: "",
  requestedEta: 0,
  requestedDynamicFee: {amount: 0, currency: ""},
};

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    resetCart(state, action: PayloadAction<string>) {
      state.lineItems = [];
      state.storeId = action.payload.storeId;
      state.stallId = action.payload.stallId;
      state.requestedDynamicFee = 0;
      state.requestedEta = 10; // 10 min as the default wait time.
    },
    setDynamicSettings(state, action: PayloadAction<DynamicSetting>) {
      state.requestedEta = action.payload.requestedEta;
      state.requestedDynamicFee = action.payload.requestedDynamicFee;
    },
    updateNote(state, action: PayloadAction<string>) {
      state.note = action.payload;
    },
    deleteItemFromCart(state, action: PayloadAction<MenuItem>) {
      const itemBeingDeleted: LineItem = action.payload;
      DeleteLineItemFromCart(state, itemBeingDeleted._id);
    },
    modifyItemFromCart(state, action: PayloadAction<CartItem>) {
      const lineItemBeingModified: LineItem = action.payload;
      let lineItem: LineItem | null = FindLineItem(
        state,
        lineItemBeingModified._id
      );
      if (lineItem) {
        UpdateItemInCart(state, lineItemBeingModified);
      } else {
        state.lineItems.push(lineItemBeingModified);
      }
    },
  },
});

export const {
  resetCart,
  deleteItemFromCart,
  updateNote,
  setDynamicSettings,
  modifyItemFromCart,
} = shoppingCart.actions;

export default shoppingCart.reducer;
