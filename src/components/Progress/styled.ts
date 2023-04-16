import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";

export const CircularStyled = styled.div<IStyledComponents>`
  z-index: 111111;
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.4);
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 50%;
  right: 0;
  display: ${(props) => (props.active ? "block" : "none")};

  .circle-icon {
    top: 50%;
    bottom: 0;
    left: 50%;
    right: 0;
    position: absolute;
  }
`;
