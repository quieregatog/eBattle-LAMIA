import { CiPlay1 } from "react-icons/ci";
import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonPlay } from "./styled";
import { Link } from "react-router-dom";

export const ButtonPlay: React.FC<IButton> = ({ title, htmlFor, ...props }) => {
  return (
    <Link to={htmlFor || ""} className="link">
      <StyledButtonPlay {...props}>
        <FontsP.P2 className="text-btn-filter">{title}</FontsP.P2>
        <CiPlay1 size={25} className="icon-btn" />
      </StyledButtonPlay>
    </Link>
  );
};
