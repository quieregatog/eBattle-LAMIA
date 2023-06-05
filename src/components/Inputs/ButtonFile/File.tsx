import React from "react";
import { MdAttachFile } from "react-icons/md";
import { IGlobalAttributes } from "../../../interface/IGlobal";
import { ColorsDesign } from "../../../style";
import { FontsH } from "../../../style/fonts";
import { InputButtonFileStyled } from "./styled";

interface IInputFile extends IGlobalAttributes {
  title: string;
  onChange?: (e: any) => void;
}

export const InputFile: React.FC<IInputFile> = ({
  title,
  onChange,
  ...props
}) => {
  const handleSaveFile = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    if (onChange) {
      reader.onload = () => {
        onChange(reader.result);
      };
    }
  };

  return (
    <InputButtonFileStyled htmlFor="input-file" {...props}>
      <input
        accept="image/*"
        type="file"
        id="input-file"
        onChange={handleSaveFile}
        name="file"
      />

      <FontsH.H5 fontSize={20} fontWeight={300} color={ColorsDesign.pureWhite}>
        {title}
      </FontsH.H5>
      <MdAttachFile size={30} className="icon-btn" />
    </InputButtonFileStyled>
  );
};
