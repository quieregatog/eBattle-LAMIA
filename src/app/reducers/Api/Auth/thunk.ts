import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthRequest, IRegisterRequest } from "../../interfaces/IAuth";
import api from "../config/api";
import { HeaderBasic } from "../config/headers";

export const fetchLoginAuthReducer = createAsyncThunk(
  "login/auth",
  async ({ ...dataUser }: IAuthRequest, { rejectWithValue }) => {
    try {
      
      const { data } = await api("login", {
        data: dataUser,
        method: "POST",
        headers: HeaderBasic,
      });

      localStorage.setItem("useToken", data.token);

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchRegisterAuthReducer = createAsyncThunk(
  "register/auth",
  async ({ ...dataUser }: IRegisterRequest, { rejectWithValue }) => {
    try {
      const { data } = await api("register", {
        data: dataUser,
        method: "POST",
        headers: HeaderBasic,
      });

      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
