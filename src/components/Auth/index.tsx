import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledAuth } from "./styled";
import { BiUserCircle } from "react-icons/bi";
import { FontsH } from "../../style/fonts";

export const Auth: React.FC<IGlobalAttributes> = ({ className, id }) => {
  return (
    <StyledAuth className={className} id={id}>
      <BiUserCircle size={40} />
      <FontsH.H1>Perfil</FontsH.H1>
    </StyledAuth>
  );
};
