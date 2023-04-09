import React from "react";
import { IGlobalAttributes } from "../../../interface/IGlobal";
import { InputButtonFileStyled } from "./styled";
import { MdAttachFile } from "react-icons/md";
import { FontsH } from "../../../style/fonts";
import { ColorsDesign } from "../../../style";

interface IInputFile extends IGlobalAttributes {
  title: string;
}

export const InputFile: React.FC<IInputFile> = ({ title, ...props }) => {
  return (
    <InputButtonFileStyled htmlFor="input-file" {...props}>
      <input type="file" id="input-file" name="file" />

      <FontsH.H5 fontSize={20} fontWeight={300} color={ColorsDesign.pureWhite}>
        {title}
      </FontsH.H5>
      <MdAttachFile size={30} className="icon-btn" />
    </InputButtonFileStyled>
  );
};
