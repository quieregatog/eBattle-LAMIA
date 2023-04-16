import { IGlobalAttributes } from "./IGlobal";

export interface IForm extends IGlobalAttributes {
  handleSetData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}
