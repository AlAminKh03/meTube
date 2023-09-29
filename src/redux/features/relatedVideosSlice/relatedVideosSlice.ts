import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import relatedVideosApi, { relatedVideosApiTypes } from "./relatedVideosApi";

export interface RelatedVideoTypes {
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

interface RelatedVideosInitialStateTypes {
  relatedVideos: RelatedVideoTypes[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}
const initialState: RelatedVideosInitialStateTypes = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideosAsync = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags }: relatedVideosApiTypes) => {
    const videos: RelatedVideoTypes[] = await relatedVideosApi({ id, tags });
    return videos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.error = "";
        state.isError = false;
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.error = action.error?.message || " ";
        state.isError = true;
      });
  },
});

export default relatedVideoSlice.reducer;
