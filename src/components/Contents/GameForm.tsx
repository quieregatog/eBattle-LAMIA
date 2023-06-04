import { Input } from "@mui/material";
import { IForm } from "../../interface/IForm";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { PageGamesStyled } from "../../pages/Games/styled";
import { ContentEditStyled } from "../../pages/styled";
import { FontsH, FontsT } from "../../style/fonts";
import { ButtonAction } from "../Button/Create";
import { ButtonFilter } from "../Button/Filter";
import { InputFile } from "../Inputs/ButtonFile/File";
import { Checkbox } from "../Inputs/Checkbox";
import { TextArea } from "../Inputs/Textarea/TextArea";
import { BackPage } from "../Label/BackPage";

interface IGameForm extends IGlobalAttributes, IForm {
  type: "edit" | "create";
}

export const GamesPage: React.FC<IGameForm> = ({
  type,
  handleSetData,
  onSubmit,
  ...props
}) => {
  return ( 
    <PageGamesStyled {...props}>
      <BackPage name={type === "edit" ? "Edição" : "Criar game"} />
      <ContentEditStyled
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="information-game box_content">
          <FontsH.H5 style={{ margin: "30px 0 10px" }} fontSize={30}>
            Informações
          </FontsH.H5>

          <div className="information-data">
            <Input
              className="input-mt"
              color={"warning"}
              placeholder="Novo nome"
              name="name"
              onChange={handleSetData}
              inputProps={{
                "aria-label": "description",
              }}
            />
            <div className="information-filter">
              <ButtonFilter width={"200px"} title="Temas" />
              <ButtonFilter width={"200px"} title="Idiomas" />
            </div>
            <ButtonAction
              styleBord="fill"
              type="save"
              title="Salvar"
              className="bottom-filter"
            />
          </div>
        </div>

        <div className="question-game box_content">
          <FontsH.H5 style={{ margin: "30px 0 10px" }} fontSize={30}>
            A questão
          </FontsH.H5>

          <div className="question-data">
            <TextArea
              name="description"
              title="Texto da pergunta"
              onChange={handleSetData}
            />

            <InputFile className="input-file" title="Anexar imagem" />

            <div className="data-alternative">
              <FontsT.T1
                fontSize={24}
                fontWeight={300}
                color={"rgba(0, 0, 0, 0.6);"}
              >
                Alternativas
              </FontsT.T1>

              <div className="awnsers-game">
                <Checkbox className="awnser" awnser="Resposta A" />
                <Checkbox className="awnser" awnser="Resposta B" />
                <Checkbox className="awnser" awnser="Resposta C" />
                <Checkbox className="awnser" awnser="Resposta D" />
              </div>
            </div>

            <div className="data-alternative">
              <FontsT.T1
                fontSize={24}
                fontWeight={300}
                color={"rgba(0, 0, 0, 0.6);"}
              >
                Tempo da pergunta
              </FontsT.T1>
            </div>
          </div>
        </div>
      </ContentEditStyled>
    </PageGamesStyled>
  );
};
