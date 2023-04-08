import { FormRegister } from "../../components/Forms/FormRegister";
import NavBar from "../../components/NavBar";
import { PageStyled } from "../styled";
import { PageLoginStyled } from "./styled";

export const RegisterPage = () => {
  return (
    <PageStyled>
      <NavBar />
      <PageLoginStyled>
        <FormRegister />
      </PageLoginStyled>
    </PageStyled>
  );
};
