import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  theme: "light" | "dark";
}

const initialState: InitialStateProps = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      console.log(action);
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
