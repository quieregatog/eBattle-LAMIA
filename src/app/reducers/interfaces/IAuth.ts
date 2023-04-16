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

export interface IRegisterRequest {
  email: string;
  name: string;
  password: string;
  intitution: string;
  city: string;
  workType: string;
  educationLevel: string;
}

interface IAuth {
  username: string;
  password: string;
  token: string;
}
