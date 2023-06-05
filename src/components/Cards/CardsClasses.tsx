import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsP, FontsT, Legend1 } from "../../style/fonts";
import { ButtonPlay } from "../Button/Play";
import { ChipPublic } from "../Chips/Public";
import { StyledCardClasses } from "./styled";

interface IClassesCard extends IGlobalAttributes {
  tag: string;
  name: string;
  author: string;
  number_anwser: number;
  last_edition: string;
  nivel: "Fácil" | "Médio" | "Difícil";
  publicCard: boolean;
}

export const CardClasses: React.FC<IClassesCard> = ({
  author,
  last_edition,
  name,
  nivel,
  number_anwser,
  publicCard,
  tag,
  ...props
}) => {
  return (
    <StyledCardClasses {...props}>
      <div className="card">
        <Legend1 fontSize={29}>{tag}</Legend1>
        <div className="body-data">
          <FontsT.T1 fontSize={30}>{name}</FontsT.T1>
        </div>
        <div className="data-details">
          <FontsP.P3 className="text-detail-card">
            Autor:<p className="title-detail">{author}</p>
          </FontsP.P3>
          <FontsP.P3 className="text-detail-card">
            Numero de perguntas:
            <p className="title-detail">{number_anwser}</p>
          </FontsP.P3>
          <FontsP.P3 className="text-detail-card">
            Nível de dificuldade:
            <p className="title-detail">{nivel}</p>
          </FontsP.P3>
          <FontsP.P3 className="text-detail-card">
            Útilma edição: <p className="title-detail">{last_edition}</p>
          </FontsP.P3>
        </div>
        <ChipPublic className="btn-public" isPublic={publicCard} />
        <ButtonPlay className="btn-play" title="Hora do jogo" htmlFor="start" />
      </div>
    </StyledCardClasses>
  );
};
