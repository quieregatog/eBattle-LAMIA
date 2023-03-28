import React from "react";
import { FontsLink } from "../../style/fonts";
import { ButtonDefault } from "../Button/Default";
import { InputText } from "../Inputs/Text";
import { FormStyled } from "./styled";

export const FormLogin = () => {
  return (
    <FormStyled>
      <div className="container-form">
        <InputText
          name="email"
          placeholder="kenzi.lawson@example.com"
          type="email"
          title="Login/Email"
        />
        <InputText
          name="password"
          placeholder="**********************"
          type="password"
          title="Senha"
        />
        <FontsLink.A1>Esquecir minha senha</FontsLink.A1>
      </div>
      <ButtonDefault title="Vamos nessa" className="btn-formLogin" />
    </FormStyled>
  );
};
