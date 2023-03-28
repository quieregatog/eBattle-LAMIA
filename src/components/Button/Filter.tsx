import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonFilter } from "./styled";
import { IoChevronBackOutline } from "react-icons/io5";

export const ButtonFilter: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <StyledButtonFilter {...props}>
      <FontsP.P1 className="text-btn-filter">{title}</FontsP.P1>
      <IoChevronBackOutline size={30} className="icon-btn-filter" />
    </StyledButtonFilter>
  );
};
