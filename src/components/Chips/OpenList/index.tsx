import React from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IGlobalAttributes } from "../../../interface/IGlobal";
import { ColorsDesign } from "../../../style";
import { FontsT } from "../../../style/fonts";
import { OpenListStyled } from "./styled";

export const OpenList: React.FC<IGlobalAttributes> = ({ ...props }) => {
  return (
    <OpenListStyled {...props}>
      <FontsT.T1
        className="name-fonts"
        fontSize={22}
        color={ColorsDesign.pureWhite}
      >
        Lista
      </FontsT.T1>
      <HiOutlineClipboardList size={35} color={ColorsDesign.pureWhite} />
    </OpenListStyled>
  );
};
