import { BsFillCircleFill } from "react-icons/bs";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";
import { StyledButtonPublic } from "./styled";

export interface IButtonPublic extends IGlobalAttributes {
  isPublic: boolean;
}

export const ButtonPublic: React.FC<IButtonPublic> = ({
  isPublic,
  ...props
}) => {
  return (
    <StyledButtonPublic {...props} active={isPublic}>
      <BsFillCircleFill
        className="circle-btn"
        color={isPublic ? ColorsDesign.confirm : ColorsDesign.primary}
      />
      <p></p>
    </StyledButtonPublic>
  );
};
