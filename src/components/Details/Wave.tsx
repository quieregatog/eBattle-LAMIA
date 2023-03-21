import { wave } from "../../assets/images";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledWave } from "./styled";

export const WaveComponents: React.FC<IGlobalAttributes> = ({
  className,
  id,
}) => {
  return (
    <StyledWave className={className} id={id}>
      <img src={wave} alt="Wave" />
    </StyledWave>
  );
};
