import React from "react";
import { ColorsDesign } from "../../style";
import { FontsT } from "../../style/fonts";
import { ButtonDefault } from "../Button/Default";
import { InputText } from "../Inputs/Text";
import { FormStyled } from "./styled";

export const FormRegister = () => {
  return (
    <FormStyled>
      <FontsT.T1 color={ColorsDesign.secondary}>Cadastro</FontsT.T1>
      <div className="container-form">
        <InputText
          className="input-form"
          name="name"
          placeholder="Nome Sobrenome"
          type="text"
          title="Nome Completo"
        />
        <InputText
          className="input-form"
          name="email"
          placeholder="kenzi.lawson@example.com"
          type="email"
          title="Login/Email"
        />
        <InputText
          className="input-form"
          name="Cidade"
          placeholder="Exemplo"
          type="text"
          title="Cidade"
        />
        <InputText
          className="input-form"
          name="check-password"
          placeholder="*************************"
          type="password"
          title="Criar Senha"
        />
        <InputText
          className="input-form"
          name="password"
          placeholder="*************************"
          type="password"
          title="Repetir senha"
        />
      </div>
      <ButtonDefault title="Inscrever-se" className="btn-formLogin" />
    </FormStyled>
  );
};