import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";

export const LabelStyled = styled.label<IStyledComponents>`
  margin-bottom: 0;
  width: 100%;

  h5 {
    color: ${(props) => props.color || ColorsDesign.dark};
    margin-top: 10px;
  }
`;

export const LabelBackStyled = styled.label<IStyledComponents>`
  display: flex;
  align-items: center;
  max-width: ${(props) => props.maxWidth || "150"}px;

  * {
    padding: 0;
    margin: 0;
  }

  justify-content: space-evenly;
  word-wrap: break-word;
`;
