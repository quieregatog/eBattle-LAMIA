import { useDispatch } from "react-redux";
import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatchApp = useDispatch<AppDispatch>;
