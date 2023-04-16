import IBaseReducer from "./IBase";

interface IAuthReducer extends IBaseReducer {
  userAuth: IAuth | undefined;
  isLogged: boolean;
}

export default IAuthReducer;

export interface IAuthRequest {
  email: string;
  password: string;
}

interface IAuth {
  username: string;
  password: string;
  token: string;
}
