import React from "react";
import { UnsplashComponent } from "../../components/Details/Unsplash";
import { FormLogin } from "../../components/Forms/FormLogin";
import NavBar from "../../components/NavBar";
import { PageStyled } from "../styled";
import { PageLoginStyled } from "./styled";

export const LoginPage = () => {
  return (
    <PageStyled>
      <NavBar />
      <PageLoginStyled>
        <FormLogin />
      </PageLoginStyled>
      <UnsplashComponent />
    </PageStyled>
  );
};
