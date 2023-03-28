import { wave } from "../../assets/images";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledWave } from "./styled";

export const WaveComponents: React.FC<IGlobalAttributes> = ({
  ...props
}) => {
  return <StyledWave {...props} backgroundImage={wave} />;
};
