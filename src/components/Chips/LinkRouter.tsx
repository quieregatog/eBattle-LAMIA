import { IGlobalAlternative } from "../../interface/IGlobal";
import { StyledLink } from "./styled";

interface IChipLink extends IGlobalAlternative {
  router: string;
}

export const LinkRouter: React.FC<IChipLink> = ({
  children,
  router,
  ...props
}) => {
  //
  return (
    <StyledLink {...props}>
      {/* <Link className="link-router" to={router}> */}
      {children}
      {/* </Link> */}
    </StyledLink>
  );
};
