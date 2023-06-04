import { IGlobalAttributes } from "../../interface/IGlobal";
import { ButtonClear } from "../Button/Clear";
import { ChipTag } from "./ChipTag";
import { StyledResult } from "./styled";

interface IResultSearch extends IGlobalAttributes {
  topics: string[];
}

export const ResultsSearch: React.FC<IResultSearch> = ({
  topics,
  ...props
}) => {
  return (
    <StyledResult {...props}>
      {topics.map((item, index) => (
        <ChipTag title={item} key={index} className="topic-result" />
      ))}
      <ButtonClear title="Limpar filtros" />
    </StyledResult>
  );
};
