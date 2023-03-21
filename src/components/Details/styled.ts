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
