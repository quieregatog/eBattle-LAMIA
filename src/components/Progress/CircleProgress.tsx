import { CircularProgress } from "@mui/material";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { CircularStyled } from "./styled";

interface ICircularProgress extends IGlobalAttributes {
  active: boolean;
}

export const CircleProgress: React.FC<ICircularProgress> = ({
  active,
  ...props
}) => {
  return (
    <CircularStyled active={active} {...props}>
      <CircularProgress className="circle-icon" color="secondary" />
    </CircularStyled>
  );
};
