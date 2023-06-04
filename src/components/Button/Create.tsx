import { BiSave } from "react-icons/bi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IButton } from "../../interface/IButton";
import { ColorsDesign } from "../../style";
import { FontsLink, FontsP } from "../../style/fonts";
import { StyledButtonUpdated } from "./styled";

interface IButtonUpdate extends IButton {
  type: "save" | "create";
  styleBord: "line" | "fill";
  redirection?: {
    url: string;
  };
}

export const ButtonAction: React.FC<IButtonUpdate> = ({
  title,
  type,
  styleBord,
  redirection,
  ...props
}) => {
  return (
    <FontsLink.A1 href={redirection?.url || "#"}>
      <StyledButtonUpdated typeBord={styleBord} {...props}>
        <FontsP.P2
          fontSize={22}
          color={
            styleBord === "line" ? ColorsDesign.confirm : ColorsDesign.pureWhite
          }
          className="text-btn-filter"
        >
          {title}
        </FontsP.P2>
        {type === "save" ? (
          <BiSave size={30} className="icon-btn" />
        ) : (
          <HiOutlinePlusSm size={30} className="icon-btn" />
        )}
      </StyledButtonUpdated>
    </FontsLink.A1>
  );
};
