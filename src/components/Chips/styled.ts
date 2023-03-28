import styled from "styled-components";
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
