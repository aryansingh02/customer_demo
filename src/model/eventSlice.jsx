// @flow
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Event} from "./dataModel";

const sleekEventState = createSlice({
  name: "sleekEventState",
  initialState: {},
  reducers: {
    resetEventState(state, action: PayloadAction<Event>) {
      return action.payload;
    },
  },
});

export const {resetEventState} = sleekEventState.actions;

export default sleekEventState.reducer;
