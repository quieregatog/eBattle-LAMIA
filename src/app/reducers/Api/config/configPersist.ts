import AsyncStorage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};
