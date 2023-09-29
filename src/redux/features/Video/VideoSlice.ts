import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "./VideoApi";

export interface VideoTypes {
  id: number;
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unlikes: number;
}

interface InitialStateTypes {
  video: VideoTypes;
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialState: InitialStateTypes = {
  video: {
    id: 0,
    title: "",
    description: "",
    author: "",
    avatar: "",
    date: "",
    duration: "",
    views: "",
    link: "",
    thumbnail: "",
    tags: [],
    likes: 0,
    unlikes: 0,
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideoAsync = createAsyncThunk(
  "video/fetchVideo",
  async (id: number) => {
    const videos: VideoTypes = await videoApi(id);
    return videos;
  }
);

const singleVideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
        state.error = "";
        state.isError = false;
      })
      .addCase(fetchVideoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.video = initialState.video;
        state.error = action.error?.message || " ";
        state.isError = true;
      });
  },
});

export default singleVideoSlice.reducer;
