import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { CheckboxStyled } from "./styled";

interface IInputCheckbox extends IGlobalAttributes {
  awnser: string;
}

export const Checkbox: React.FC<IInputCheckbox> = ({ awnser, ...props }) => {
  return (
    <CheckboxStyled {...props}>
      <input
        type="checkbox"
        name=""
        id={"checkbox-question" + awnser.toLowerCase().replace(" ", "")}
        className="input-checkbox"
        placeholder=""
      />

      <label
        htmlFor={"checkbox-question" + awnser.toLowerCase().replace(" ", "")}
      >
        <input type="text" name="" id="" placeholder="Resposta" />
      </label>
    </CheckboxStyled>
  );
};
