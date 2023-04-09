import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";

export const StyledChip = styled.div``;

export const StyledLink = styled.div`
  text-align: center;
  margin: 10px;

  .link-router {
    text-decoration: none;
  }

  .chip-text {
    height: 35px;
  }

  .chip-text:hover {
    border-bottom: 4px solid ${ColorsDesign.primary};
  }
`;

export const StyledChipText = styled.div`
  padding: 2px 12px;
  height: 40px;
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin: 0;
  align-items: center;
  border: 2px solid ${ColorsDesign.borderTag};
  color: ${ColorsDesign.borderTag};
  border-radius: 8px;
`;

export const StyledResult = styled.div`
  display: flex;

  .topic-result {
    margin-right: 10px;
  }
`;

export const StyledChipPublic = styled.div`
  .text-public {
    margin-bottom: 4px;
    color: ${ColorsDesign.borderTag};
  }
`;

export const AwnserStyled = styled.div<IStyledComponents>`
  background: linear-gradient(#ffba08, #d00000);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  border-radius: 10px;

  .question-awnser {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 0;
    width: 97.5%;
    justify-content: space-evenly;

    height: 96%;
    background-color: ${ColorsDesign.pureWhite};

    .text-ask {
      padding-left: 10px;
    }
  }
`;

export const ChipUpdateCardStyled = styled.div`
  padding: 0;
  margin: 0 0 20px;

  .buttons {
    display: flex;
    justify-content: space-around;

    .fonts-t {
      margin: -3px;
      display: flex;

      padding: 0;
    }
  }
`;
