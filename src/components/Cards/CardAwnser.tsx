import { ButtonUpdate } from "../Button/Create";
import { Answer } from "../Chips/Answer";
import { OpenList } from "../Chips/OpenList";
import { UpdateChip } from "../Chips/Update";
import { CardAwnsersStyled, StyledControlCard } from "./styled";

const awnsers = [
  "Nova pergunta",
  "Nova pergunta",
  "Nova pergunta",
  "Nova pergunta",
  "Nova pergunta",
  "Nova pergunta",
];

export const CardAwnsers = () => {
  return (
    <StyledControlCard>
      <input type="checkbox" name="" id="openlist-id" />
      <OpenList htmlFor="openlist-id" className="open-list" />
      <CardAwnsersStyled className="card-list">
        <div className="awnsers-questions">
          {awnsers.map((question, index) => (
            <UpdateChip key={index} className="item-card-anwser">
              <Answer
                id_awnswer={index}
                name={question}
                width="216px"
                height="86px"
                className="anwser-card"
              />
            </UpdateChip>
          ))}
        </div>
        <ButtonUpdate
          styleBord="line"
          className="btn-create"
          title="Nova pergunta"
          type="create"
        />
      </CardAwnsersStyled>
    </StyledControlCard>
  );
};
