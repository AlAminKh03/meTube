import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  tags: string[];
  search: string;
}

const initialState: FilterState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { tagRemoved, tagSelected, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
