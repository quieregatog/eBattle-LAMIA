import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonCreated } from "./styled";
import { HiOutlinePlusSm } from "react-icons/hi";

export const ButtonCreate: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <StyledButtonCreated {...props}>
      <FontsP.P2 className="text-btn-filter">{title}</FontsP.P2>
      <HiOutlinePlusSm size={30} className="icon-btn" />
    </StyledButtonCreated>
  );
};
