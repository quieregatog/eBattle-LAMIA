import { Input } from "@mui/material";
import { ButtonUpdate } from "../../components/Button/Create";
import { ButtonFilter } from "../../components/Button/Filter";
import { CardAwnsers } from "../../components/Cards/CardAwnser";
import { InputFile } from "../../components/Inputs/ButtonFile/File";
import { Checkbox } from "../../components/Inputs/Checkbox";
import { TextArea } from "../../components/Inputs/Textarea/TextArea";
import { BackPage } from "../../components/Label/BackPage";
import NavBar from "../../components/NavBar";
import { FontsH, FontsT } from "../../style/fonts";
import { ContentEditStyled, PageStyled } from "../styled";
import { PageGamesStyled } from "./styled";

export const GamesEditPage = () => {
  return (
    <PageStyled>
      <NavBar />
      <CardAwnsers />
      <PageGamesStyled>
        <BackPage name="Edição" />
        <ContentEditStyled>
          <div className="information-game box_content">
            <FontsH.H5 style={{ margin: "30px 0 10px" }} fontSize={30}>
              Informações
            </FontsH.H5>

            <div className="information-data">
              <Input
                className="input-mt"
                color={"warning"}
                placeholder="Novo nome"
                inputProps={{
                  "aria-label": "description",
                }}
              />
              <div className="information-filter">
                <ButtonFilter width={"200px"} title="Temas" />
                <ButtonFilter width={"200px"} title="Subtemas" />
              </div>
              <ButtonUpdate
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
              <TextArea title="Texto da pergunta" />

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
    </PageStyled>
  );
};
