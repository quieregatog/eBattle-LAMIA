import { descriptionHome } from "../../assets/data/pages/home";
import { logoHome } from "../../assets/images";
import { ButtonDefault } from "../../components/Button/Default";
import { WaveComponents } from "../../components/Details/Wave";
import NavBar from "../../components/NavBar";
import { FontsH, FontsP } from "../../style/fonts";
import { PageStyled } from "../styled";
import { PageHomeStyled } from "./styled";

const HomePage = () => {
  return (
    <PageStyled>
      <NavBar />
      <PageHomeStyled>
        <div className="presentation">
          <div className="header-home">
            <FontsH.H3 id="title-home" fontSize={55}>
              Bem vindo
            </FontsH.H3>
            <FontsP.P1 id="description-home">
              {descriptionHome.Description}
            </FontsP.P1>
          </div>

          <ButtonDefault className="btn-home" title="Jogar" />
        </div>

        <img src={logoHome} className="logo-home" width={765} alt={"logo"} />
      </PageHomeStyled>
      <WaveComponents />
    </PageStyled>
  );
};

export default HomePage;
