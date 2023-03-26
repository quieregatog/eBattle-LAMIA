import React from "react";
import { IButton } from "../../interface/IButton";
import { FontsH } from "../../style/fonts";
import { StyledButton } from "./styled";

export const ButtonDefault: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <StyledButton {...props}>
      <FontsH.H3 id="title-button">{title || "Button default"}</FontsH.H3>
    </StyledButton>
  );
};
