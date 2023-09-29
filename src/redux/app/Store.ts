import CounterSlice from "../features/counter/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";
import Videos from "../features/Videos/Videos";
import Tags from "../features/tags/Tags";
import singleVideo from "../features/Video/VideoSlice";
import theme from "../features/Theme/theme";
import relatedVideosSlice from "../features/relatedVideosSlice/relatedVideosSlice";
import filterSlice from "../features/filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    videos: Videos,
    tags: Tags,
    video: singleVideo,
    theme: theme,
    relatedVideos: relatedVideosSlice,
    filter: filterSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
