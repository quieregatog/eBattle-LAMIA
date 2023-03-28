import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonClear } from "./styled";
import { BsTrash3 } from "react-icons/bs";

export const ButtonClear: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <StyledButtonClear {...props}>
      <FontsP.P3>{title}</FontsP.P3>
      <BsTrash3 size={22} />
    </StyledButtonClear>
  );
};
