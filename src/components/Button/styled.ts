import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";

const StyledButton = styled.button`
  background: #fb5607;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  border: 0;
  outline: none;
  min-width: 205px;
  max-height: 53px;
  padding: 30px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  #title-button {
    font-size: 24px;
    line-height: 0;
    color: ${ColorsDesign.pureWhite};
  }
`;

const StyledButtonTopic = styled.button<IStyledComponents>`
  padding: 12px 38px;
  cursor: pointer;
  border: 0;
  background-color: ${(props) =>
    props.active ? ColorsDesign.secondary : ColorsDesign.pureWhite};
  color: ${(props) =>
    props.active ? ColorsDesign.pureWhite : ColorsDesign.font};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonFilter = styled.button<IStyledComponents>`
  border: 0;
  cursor: pointer;
  background-color: ${ColorsDesign.primary};
  border-radius: 8px;
  height: 63px;
  width: ${(props) => props.width || "149px"};
  color: ${ColorsDesign.pureWhite};
  display: flex;
  align-items: center;
  justify-content: center;

  .text-btn-filter {
    color: ${ColorsDesign.pureWhite};
    line-height: 0;
  }

  .icon-btn-filter {
    rotate: -90deg;
  }
`;

const StyledButtonUpdated = styled.button<IStyledComponents>`
  border: 2px solid
    ${(props) =>
      props.typeBord === "line"
        ? ColorsDesign.confirm
        : ColorsDesign.pureWhite};
  cursor: pointer;
  background-color: ${(props) =>
    props.typeBord === "fill" ? ColorsDesign.confirm : "transparent"};
  border-radius: 8px;
  width: 193px;
  padding: 0;
  height: 63px;
  color: ${(props) =>
    props.typeBord === "line" ? ColorsDesign.confirm : ColorsDesign.pureWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonPlay = styled.button`
  border: 0;
  background-color: ${ColorsDesign.confirm};
  border-radius: 8px;
  cursor: pointer;
  width: 193px;
  padding: 0;
  height: 43px;
  color: ${ColorsDesign.pureWhite};
  display: flex;
  align-items: center;
  justify-content: center;

  .text-btn-filter {
    font-size: 24px;
  }
`;

export const StyledButtonClear = styled.button`
  border: 0;
  cursor: pointer;
  background: ${ColorsDesign.pureWhite};
  color: ${ColorsDesign.primary};
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtonPublic = styled.div<IStyledComponents>`
  width: 50px;
  cursor: pointer;
  border: 4px solid
    ${(props) => (props.active ? ColorsDesign.confirm : ColorsDesign.primary)};
  background-color: ${ColorsDesign.pureWhite};
  border-radius: 30px;
  height: 25px;
  padding: 0px 3px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.active ? "row-reverse" : "row")};
  justify-content: space-between;
`;

export {
  StyledButton,
  StyledButtonPlay,
  StyledButtonTopic,
  StyledButtonFilter,
  StyledButtonUpdated,
};
