import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tagsApi from "./TagsApi";

export interface TagsTypes {
  id: number;
  title: string;
}

interface InitialStateTypes {
  tags: TagsTypes[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const initialState: InitialStateTypes = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTagsAsync = createAsyncThunk("tags/fetchVideos", async () => {
  const videos: TagsTypes[] = await tagsApi();
  return videos;
});

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
        state.error = "";
        state.isError = false;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.error = action.error?.message || " ";
        state.isError = true;
      });
  },
});

export default TagsSlice.reducer;
