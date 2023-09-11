import CounterSlice from "../features/counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { counter: CounterSlice },
});

export default store;
