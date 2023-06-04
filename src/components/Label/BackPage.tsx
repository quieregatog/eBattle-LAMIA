import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";
import { FontsH } from "../../style/fonts";
import { LabelBackStyled } from "./styled";

interface ILabelBack extends IGlobalAttributes {
  name: string;
}

export const BackPage: React.FC<ILabelBack> = ({ name, ...props }) => {
  return (
    <LabelBackStyled maxWidth="210" {...props}>
      <IoReturnUpBackOutline color={ColorsDesign.secondary} size={30} />
      <FontsH.H5 fontSize={33} fontWeight={500}>
        {name}
      </FontsH.H5>
    </LabelBackStyled>
  );
};
