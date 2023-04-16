import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsLink } from "../../style/fonts";
import { ButtonDefault } from "../Button/Default";
import { InputText } from "../Inputs/Text";
import { FormStyled } from "./styled";

interface IForm extends IGlobalAttributes {
  handleSetData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export const FormLogin: React.FC<IForm> = ({ handleSetData, onSubmit }) => {
  return (
    <FormStyled
      margin="150px auto"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="container-form">
        <InputText
          name="email"
          placeholder="kenzi.lawson@example.com"
          type="email"
          title="Login/Email"
          onChange={handleSetData}
        />
        <InputText
          name="password"
          placeholder="**********************"
          type="password"
          title="Senha"
          onChange={handleSetData}
        />
        <FontsLink.A1>Esquecir minha senha</FontsLink.A1>
      </div>
      <ButtonDefault title="Vamos nessa" className="btn-formLogin" />
    </FormStyled>
  );
};
