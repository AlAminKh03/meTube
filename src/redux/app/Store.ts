import CounterSlice from "../features/counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";
import Videos from "../features/Videos/Videos";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { counter: CounterSlice, videos: Videos },
});

export default store;
export type AppDispatch = typeof store.dispatch;
