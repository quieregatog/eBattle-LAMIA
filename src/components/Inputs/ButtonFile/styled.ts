import styled from "styled-components";
import { ColorsDesign } from "../../../style";

export const InputButtonFileStyled = styled.label`
  background-color: ${ColorsDesign.secondary};
  height: 50px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${ColorsDesign.pureWhite};
  border-radius: 15px;
  width: 289px;
  z-index: 1111;
  border: none;
  transition: all 0.2s ease-in-out;

  .icon-btn {
    rotate: 20deg;
  }

  input[type="file"] {
    display: none;
  }
`;
