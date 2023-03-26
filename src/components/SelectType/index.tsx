import { IGlobalAttributes } from "../../interface/IGlobal";
import { ButtonTopic } from "../Button/Topic";
import { StyledSelect } from "./styled";

interface ISelect extends IGlobalAttributes {
  topics: {
    label: string;
    active: boolean;
  }[];
}

export const SelectType: React.FC<ISelect> = ({ topics, ...props }) => {
  return (
    <StyledSelect {...props}>
      {topics.map((item) => (
        <ButtonTopic
          active={item.active}
          title={item.label}
          className="btn-select"
        />
      ))}
    </StyledSelect>
  );
};
