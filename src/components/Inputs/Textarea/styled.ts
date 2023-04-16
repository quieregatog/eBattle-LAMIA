import styled from "styled-components";
import { ColorsDesign } from "../../../style";

export const TextareaStyled = styled.div`
  width: 100%;
  height: 300px;
`;

export const TextAreaComponent = styled.textarea`
  width: 100%;
  height: 100%;
  border: 3px solid ${ColorsDesign.primary};
  border-radius: 16px;
  padding: 10px;

  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 138%;

  text-align: justify;
`;
