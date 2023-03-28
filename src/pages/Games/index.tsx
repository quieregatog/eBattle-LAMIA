import { CardClasses } from "../../components/Cards/CardsClasses";
import { FilterGame } from "../../components/Filter";
import NavBar from "../../components/NavBar";
import { SelectType } from "../../components/SelectType";
import { PageStyled } from "../styled";
import { PageGamesStyled } from "./styled";

const topics = [
  { label: "Meus", active: false },
  { label: "Jogos Salvos", active: true },
  { label: "Comunidade", active: false },
];

export const GamesPage = () => {
  return (
    <PageStyled>
      <NavBar />
      <PageGamesStyled>
        <SelectType topics={topics} />

        <FilterGame />

        <CardClasses
          tag="CC25E-22"
          author="Gustavo Silva"
          number_anwser={30}
          nivel={"Médio"}
          publicCard={false}
          last_edition="31/02/2023 ás 8h27"
          name={"Fundamentos de Sistemas Inteligentes"}
        />
        <CardClasses
          tag="CC25E-22"
          author="Wellington Ferreira"
          number_anwser={30}
          nivel={"Difícil"}
          publicCard={true}
          last_edition="31/02/2023 ás 8h27"
          name={"Fundamentos de Sistemas Inteligentes"}
        />
      </PageGamesStyled>
    </PageStyled>
  );
};
