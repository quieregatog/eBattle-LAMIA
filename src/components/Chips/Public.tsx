import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsP } from "../../style/fonts";
import { ButtonPublic } from "../Button/Public";
import { StyledChipPublic } from "./styled";

interface IButtonPublic extends IGlobalAttributes {
  isPublic: boolean;
}

export const ChipPublic: React.FC<IButtonPublic> = ({ isPublic, ...props }) => {
  return (
    <StyledChipPublic {...props}>
      <FontsP.P3 className="text-public">publica</FontsP.P3>
      <ButtonPublic isPublic={isPublic} />
    </StyledChipPublic>
  );
};
