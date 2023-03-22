// import { Link } from "react-router-dom";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledLink } from "./styled";

interface IChipLink extends IGlobalAttributes {
  router: string;
}

export const LinkRouter: React.FC<IChipLink> = ({
  children,
  router,
  className,
  id,
}) => {
  return (
    <StyledLink className={className} id={id}>
      {/* <Link className="link-router" to={router}> */}
      {children}
      {/* </Link> */}
    </StyledLink>
  );
};
