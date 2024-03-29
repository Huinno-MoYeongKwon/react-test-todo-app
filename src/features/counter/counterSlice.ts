import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("decrement");
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

export const incrementAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: { counter: CounterState }) =>
  state.counter.value;

export default slice.reducer;
