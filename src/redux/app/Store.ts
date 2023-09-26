import CounterSlice from "../features/counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";
import Videos from "../features/Videos/Videos";
import Tags from "../features/tags/Tags";
import singleVideo from "../features/Video/VideoSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    videos: Videos,
    tags: Tags,
    video: singleVideo,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
