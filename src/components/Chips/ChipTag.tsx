import { AiFillCloseSquare } from "react-icons/ai";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsP } from "../../style/fonts";
import { StyledChipText } from "./styled";

interface IChipText extends IGlobalAttributes {
  title: string;
}

export const ChipTag: React.FC<IChipText> = ({ title, ...props }) => {
  return (
    <StyledChipText {...props}>
      <FontsP.P3>{title}</FontsP.P3>
      <AiFillCloseSquare size={30} />
    </StyledChipText>
  );
};
