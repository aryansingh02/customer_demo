// @flow
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Stall} from "./dataModel";

const sleekStallState = createSlice({
  name: "sleekStallState",
  initialState: {},
  reducers: {
    resetStallState(state, action: PayloadAction<Stall>) {
      return action.payload;
    },
  },
});

export const {resetStallState} = sleekStallState.actions;

export default sleekStallState.reducer;
