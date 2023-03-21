import styled from "styled-components";
import { ColorsDesign } from "../../style";

export const StyledChip = styled.div``;

export const StyledLink = styled.div`
  text-align: center;
  margin: 10px;
  .link-router {
    text-decoration: none;
  }

  &:hover {
    border-bottom: 4px solid ${ColorsDesign.primary};
  }
`;
