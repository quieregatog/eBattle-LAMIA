import { IGlobalAttributes } from "./IGlobal";

export interface IButton extends IGlobalAttributes {
  title: string;
  active?: boolean;
}
