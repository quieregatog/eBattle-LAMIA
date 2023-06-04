import React from "react";
import { IGlobalAttributes } from "../../../interface/IGlobal";
import { Label } from "../../Label";
import { TextAreaComponent, TextareaStyled } from "./styled";

interface ITextArea extends IGlobalAttributes {
  title: string;
  name: string;
  onChange?: (value: any) => void;
}

export const TextArea: React.FC<ITextArea> = ({
  title,
  onChange,
  name,
  ...props
}) => {
  return (
    <TextareaStyled {...props}>
      <Label color={"rgba(0, 0, 0, 0.6);"} title={title} />
      <TextAreaComponent {...{ name, onChange }} />
    </TextareaStyled>
  );
};
