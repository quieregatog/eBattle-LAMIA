import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonUpdated } from "./styled";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiSave } from "react-icons/bi";
import { ColorsDesign } from "../../style";

interface IButtonUpdate extends IButton {
  type: "save" | "create";
  styleBord: "line" | "fill";
}

export const ButtonUpdate: React.FC<IButtonUpdate> = ({
  title,
  type,
  styleBord,
  ...props
}) => {
  return (
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
  );
};
