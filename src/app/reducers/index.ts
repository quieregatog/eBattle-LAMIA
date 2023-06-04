import { persistReducer } from "redux-persist";
import { persistConfig } from "./Api/config/configPersist";
import authSlice from "./AuthSlice";
import gamesSlice from "./Games";

const RootReducer = {
  authSlice: persistReducer(persistConfig, authSlice),
  gamesSlice,
};

export default RootReducer;
