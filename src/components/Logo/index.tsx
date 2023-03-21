import { eBattle, lBattle } from "../../assets/images";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledLogo } from "./styled";

export const Logo: React.FC<IGlobalAttributes> = ({ className, id }) => {
  return (
    <StyledLogo className={className} id={id}>
      <img className="icon" src={lBattle} alt="logo" />
      <img className="name" src={eBattle} alt="logo" />
    </StyledLogo>
  );
};
