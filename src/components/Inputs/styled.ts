import styled from "styled-components";
import { ColorsDesign } from "../../style";

export const InputTextStyled = styled.div`
  width: 100%;
  height: 110px;
  display: block;
  position: relative;

  .input-text {
    outline: none;
    position: absolute;
    border-radius: 8px;
    height: 23px;
    font-size: 20px;
    border: 3px solid red;
    min-width: 539px;
    padding: 15px;
    margin: 0 auto;
    top: 36px;
  }
`;

export const StyledSearchInput = styled.div`
  height: 43px;

  .input-search {
    border: 0;
    outline: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 20px;
  }

  padding: 10px;
  width: 317px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid ${ColorsDesign.primary};
  border-radius: 8px;
`;
