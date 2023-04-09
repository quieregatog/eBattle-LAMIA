import styled from "styled-components";
import { ColorsDesign } from "../../../style";

export const OpenListStyled = styled.label`
  position: fixed;
  left: 0;
  border: 0;
  background-color: ${ColorsDesign.secondary};
  color: ${ColorsDesign.pureWhite};
  width: 50px;
  height: 200px;
  top: 180px;
  transition: ease-in-out 0.3s transform;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  .name-fonts {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
`;
