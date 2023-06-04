import { createSlice } from "@reduxjs/toolkit";
import { IGamesReducer } from "../interfaces/IGames";

const initialState: IGamesReducer = {
  games: undefined,
  loading: false,
  message: {
    code: 0,
    isError: false,
    msg: undefined,
  },
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});

export const {} = gamesSlice.actions;

export default gamesSlice.reducer;
