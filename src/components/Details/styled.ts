import styled from "styled-components";
import { IStyledComponents } from "../../interface/IGlobal";

export const StyledWave = styled.div<IStyledComponents>`
  height: 200px;
  position: absolute;
  bottom: 0;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  left: 0;
  right: 0;
`;

export const StyledUnsplash = styled.div<IStyledComponents>`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 760px;
  position: absolute;
  bottom: 0;
  z-index: -1;
  right: 0;
  width: 900px;
`;
