import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsH } from "../../style/fonts";
import { LinkRouter } from "./LinkRouter";
import { StyledChip } from "./styled";

interface IChipProps extends IGlobalAttributes {
  title: string;
}

export const ChipText: React.FC<IChipProps> = ({ className, id, title }) => {
  return (
    <StyledChip className={className} id={id}>
      <LinkRouter router="/">
        <FontsH.H1 className="chip-text">{title || "Default "}</FontsH.H1>
      </LinkRouter>
    </StyledChip>
  );
};
