import React from "react";
import { IForm } from "../../interface/IForm";
import { ColorsDesign } from "../../style";
import { FontsT } from "../../style/fonts";
import { ButtonDefault } from "../Button/Default";
import { InputText } from "../Inputs/Text";
import { FormStyled } from "./styled";

export const FormRegister: React.FC<IForm> = ({ handleSetData, onSubmit }) => {
  return (
    <FormStyled
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <FontsT.T1 color={ColorsDesign.secondary} fontSize={35}>
        Cadastro
      </FontsT.T1>
      <div className="container-form">
        <InputText
          name="name"
          placeholder="Nome Sobrenome"
          type="text"
          title="Nome Completo"
          onChange={handleSetData}
        />
        <InputText
          name="email"
          placeholder="kenzi.lawson@example.com"
          type="email"
          title="Login/Email"
          onChange={handleSetData}
        />
        <InputText
          name="Cidade"
          placeholder="Exemplo"
          type="text"
          title="Cidade"
          onChange={handleSetData}
        />
        <InputText
          name="check_password"
          placeholder="*************************"
          type="password"
          title="Criar Senha"
          onChange={handleSetData}
        />
        <InputText
          name="password"
          placeholder="*************************"
          type="password"
          onChange={handleSetData}
          title="Repetir senha"
        />
      </div>
      <ButtonDefault title="Inscrever-se" className="btn-formLogin" />
    </FormStyled>
  );
};
