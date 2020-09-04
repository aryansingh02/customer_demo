// @flow
import type {Dispatch} from "redux";
import {getEvent} from "../util";
import {resetEventState} from "./eventSlice";

export const GetEventAsync = (eventId: string) => {
  return async function (dispatch: Dispatch) {
    if (eventId) {
      dispatch(resetEventState(await getEvent(eventId)));
    }
  };
};
