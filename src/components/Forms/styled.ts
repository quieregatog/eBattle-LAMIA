import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";

export const FormStyled = styled.form<IStyledComponents>`
  width: 574px;
  height: 350px;
  margin: ${(props) => props.margin || "10px auto"};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  .container-form {
    width: 100%;
    /* height: 270px; */
  }
  .btn-formLogin {
    width: 100%;
  }
`;
