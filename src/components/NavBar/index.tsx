import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { Auth } from "../Auth";
import { ChipText } from "../Chips";
import { Logo } from "../Logo";
import { StyledNavBar } from "./styled";

const titles = ["Jogar", "Tutoriais", "Sobre"];

const NavBar: React.FC<IGlobalAttributes> = ({ className, id }) => {
  return (
    <StyledNavBar className={className} id={id}>
      <Logo className="logo-nav" />

      <div className="header-full">
        <div className="header-nav">
          {titles.map((title) => (
            <ChipText key={title} title={title} className="chip-title" />
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
