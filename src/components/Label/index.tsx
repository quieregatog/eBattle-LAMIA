import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsH } from "../../style/fonts";
import { LabelStyled } from "./styled";

interface ILabel extends IGlobalAttributes {
  title: string;
}

export const Label: React.FC<ILabel> = ({ title, ...props }) => {
  return (
    <LabelStyled {...props}>
      <FontsH.H5>{title || "Label default"}</FontsH.H5>
    </LabelStyled>
  );
};
