import authSlice from "./AuthSlice";
import { persistReducer } from "redux-persist";
import { persistConfig } from "./Api/config/configPersist";

const RootReducer = {
  authSlice: persistReducer(persistConfig, authSlice),
};

export default RootReducer;
