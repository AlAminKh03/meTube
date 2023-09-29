import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videosApi from "./VideosApi";

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

export interface VideoParameters {
  tags: string[];
  search: string;
}

interface InitialStateTypes {
  videos: VideoTypes[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialState: InitialStateTypes = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }: VideoParameters) => {
    const videos: VideoTypes[] = await videosApi(tags, search);
    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.error = "";
        state.isError = false;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.error = action.error?.message || " ";
        state.isError = true;
      });
  },
});

export default videoSlice.reducer;
