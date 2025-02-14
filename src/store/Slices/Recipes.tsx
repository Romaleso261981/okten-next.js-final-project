import { createSlice } from "@reduxjs/toolkit";

type RecipesState = {
  isLogged: boolean;
  currentPages: number;
};

const initialState: RecipesState = {
  isLogged: false,
  currentPages: 2
};

const RecipesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPages = payload;
    }
  },
  extraReducers: () => {}
});

export const { setCurrentPage } = RecipesSlice.actions;

export default RecipesSlice.reducer;
