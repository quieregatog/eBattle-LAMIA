import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { Auth } from "../Auth";
import { ButtonLink } from "../Button/Link";
import { ChipText } from "../Chips";
import { Logo } from "../Logo";
import { StyledNavBar } from "./styled";

const titles = [
  { title: "Jogar", route: "/game" },
  { title: "Tutoriais", route: "/tutorial" },
  { title: "Sobre", route: "/about" },
];

const NavBar: React.FC<IGlobalAttributes> = ({ className, id }) => {
  return (
    <StyledNavBar className={className} id={id}>
      <ButtonLink to="/">
        <Logo className="logo-nav" />
      </ButtonLink>

      <div className="header-full">
        <div className="header-nav">
          {titles.map((title) => (
            <ButtonLink key={title.title} to={title.route}>
              <ChipText title={title.title} className="chip-title" />
            </ButtonLink>
          ))}
        </div>

        <div className="header-auth">
          <Auth />
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
