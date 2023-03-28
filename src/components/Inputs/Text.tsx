import { IInput } from "../../interface/IInput";
import { Label } from "../Label";
import { InputTextStyled } from "./styled";

export const InputText: React.FC<IInput> = ({
  className,
  id,
  title,
  ...props
}) => {
  return (
    <InputTextStyled className={className} id={id}>
      <Label title={title} />
      <input className="input-text" {...props} />
    </InputTextStyled>
  );
};
