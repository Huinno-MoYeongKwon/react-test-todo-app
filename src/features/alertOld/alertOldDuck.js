// Action Type
const DISPLAY = "alert/DISPLAY";
const DISMISS = "alert/DISMISS";

// Action Creator
export const display = () => {
  return { type: DISPLAY };
};
export const dismiss = () => {
  return { type: DISMISS };
};

// InitialState
const initialState = {
  flag: false,
};

// Reducer
function alertOldReducer(state = initialState, action) {
  console.log("alertReducer", action);
  if (action.type === DISPLAY) {
    return { ...state, flag: true };
  } else if (action.type === DISMISS) {
    return { ...state, flag: false };
  } else {
    return state;
  }
}

export const alertOldFlag = (state) => state.alert.flag;

export default alertOldReducer;
