import { IGlobalAttributes } from "../../interface/IGlobal";
import { ButtonAction } from "../Button/Create";
import { ButtonFilter } from "../Button/Filter";
import { ResultsSearch } from "../Chips/Results";
import { InputSearch } from "../Inputs/Search";
import { StyledFilter } from "./styled";

export const FilterGame: React.FC<IGlobalAttributes> = ({ ...props }) => {
  return (
    <StyledFilter {...props}>
      <div className="filters">
        <div className="top">
          <InputSearch name="input-search" placeholder="Pesquisar" />
          <ButtonFilter title="Filtros" />
          <ButtonFilter title="A-Z" />
        </div>
        <ButtonAction
          styleBord="line"
          type="create"
          redirection={{
            url: "/games/edit",
          }}
          title="Criar jogo"
          className="bottom-filter"
        />
      </div>
      <ResultsSearch
        className="results-filter"
        topics={["Category 1.2", "Category 1.3"]}
      />
    </StyledFilter>
  );
};
