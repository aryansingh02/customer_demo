// @flow
import type {Dispatch} from "redux";
import {getStall} from "../util";
import {resetStallState} from "./stallSlice";

export const GetStallAsync = (stallId: string) => {
  return async function (dispatch: Dispatch) {
    if (stallId) {
      dispatch(resetStallState(await getStall(stallId)));
    }
  };
};
