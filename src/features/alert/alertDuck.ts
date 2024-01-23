import { createSlice } from "@reduxjs/toolkit";

// Action Type
const DISPLAY = "alert/DISPLAY";
const DISMISS = "alert/DISMISS";

type AlertState = {
  flag: boolean;
};

// Action Creator
export const display = () => {
  return { type: DISPLAY };
};
export const dismiss = () => {
  return { type: DISMISS };
};

// InitialState
const initialState: AlertState = {
  flag: false,
};

type AlertAction = ReturnType<typeof display> | ReturnType<typeof dismiss>;

// Reducer
function alertReducer(state = initialState, action: AlertAction) {
  console.log("alertReducer", action);
  if (action.type === DISPLAY) {
    return { ...state, flag: true };
  } else if (action.type === DISMISS) {
    return { ...state, flag: false };
  } else {
    return state;
  }
}

export const alertFlag = (state: { alert: AlertState }) => state.alert.flag;

export default alertReducer;
