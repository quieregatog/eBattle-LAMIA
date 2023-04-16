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

export const CheckboxStyled = styled.div`
  width: 510px;

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    padding: 10px;
    font: inherit;
    color: currentColor;
    width: 28px;
    height: 28px;
    border: 0.15em solid ${ColorsDesign.secondary};
    border-radius: 0.6rem;
    transform: translateY(-0.075em);
  }

  input[type="checkbox"]:checked {
    appearance: none;
    padding: 10px;
    background-color: ${ColorsDesign.backgroundTransparentCheck};
    border: 0.15em solid ${ColorsDesign.confirm};
  }

  label {
    input {
      display: inline-block;
      outline: none;
      font-family: "Comfortaa";
      font-style: normal;
      font-weight: 400;
      font-size: 29px;
      margin: 0 10px;
      text-align: justify;
      color: rgba(0, 0, 0, 0.6);

      border: 0;
      width: 449px;
      border-bottom: 2px solid ${ColorsDesign.primary};
    }
  }
`;
