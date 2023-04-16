import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  fetchLoginAuthReducer,
  fetchRegisterAuthReducer,
} from "../Api/Auth/thunk";
import IAuthReducer from "../interfaces/IAuth";

const initialState: IAuthReducer = {
  userAuth: undefined,
  isLogged: false,
  loading: false,
  message: {
    code: 0,
    isError: false,
    msg: undefined,
  },
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,

  // Types of response data
  //
  //    * Fulfilled: Response data sucessfully
  //    * Rejected: Response with error
  //    * Peding: Await response of api

  extraReducers: (builder: ActionReducerMapBuilder<IAuthReducer>) => {
    builder.addCase(
      fetchLoginAuthReducer.fulfilled,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.isLogged = true;
        state.userAuth = payload;
        state.message.msg = "Usuário autenticado com sucesso";
        state.message.isError = false;
      }
    );

    builder.addCase(fetchLoginAuthReducer.pending, (state: IAuthReducer) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLoginAuthReducer.rejected,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.message.isError = true;
        if (payload) {
          state.message.msg = payload.toString();
        }
        state.message.msg = "Houve um erro no login";
      }
    );
    builder.addCase(
      fetchRegisterAuthReducer.fulfilled,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.message.msg = "Usuário criado com sucesso";
        state.message.isError = false;
        state.message.code = 200;
      }
    );

    builder.addCase(fetchRegisterAuthReducer.pending, (state: IAuthReducer) => {
      state.loading = true;
    });

    builder.addCase(
      fetchRegisterAuthReducer.rejected,
      (state: IAuthReducer, { payload }) => {
        state.loading = false;
        state.message.isError = true;
        if (payload) {
          state.message.msg = payload.toString();
        }
        state.message.msg = "Houve um erro no registro";
      }
    );
  },
  reducers: {
    getState: (state) => state,
  },
});

export const { getState } = authSlice.actions;

export default authSlice.reducer;
