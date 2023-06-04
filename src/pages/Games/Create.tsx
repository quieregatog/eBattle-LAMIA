import { CardAwnsers } from "../../components/Cards/CardAwnser";
import { GamesPage } from "../../components/Contents/GameForm";
import NavBar from "../../components/NavBar";
import { useHookForm } from "../../hook/useFormData";
import { PageStyled } from "../styled";

export const CreateGame = () => {
  const { dataHook, handleSetData } = useHookForm();

  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log(dataHook);
  };
  return (
    <PageStyled>
      <NavBar />
      <CardAwnsers />
      <GamesPage
        handleSetData={handleSetData}
        onSubmit={handleClick}
        type="create"
      />
    </PageStyled>
  );
};
