import { IGlobalAttributes } from "./IGlobal";

export interface IInput extends IGlobalAttributes, IInputBase {
  type: "email" | "password" | "text";
  title: string;
}

export interface IInputSearch extends IGlobalAttributes, IInputBase {}

interface IInputBase {
  placeholder: string;
  name: string;
}
