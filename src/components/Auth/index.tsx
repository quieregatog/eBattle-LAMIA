import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledAuth } from "./styled";
import { BiUserCircle } from "react-icons/bi";
import { FontsH } from "../../style/fonts";
import { ButtonLink } from "../Button/Link";

export const Auth: React.FC<IGlobalAttributes> = ({ className, id }) => {
  return (
    <StyledAuth className={className} id={id}>
      <BiUserCircle size={40} />
      <ButtonLink to="/login">
        <FontsH.H1>Login</FontsH.H1>
      </ButtonLink>
    </StyledAuth>
  );
};
