import { IButton } from "../../interface/IButton";
import { FontsP } from "../../style/fonts";
import { StyledButtonTopic } from "./styled";

export const ButtonTopic: React.FC<IButton> = ({ title, ...props }) => {
  return (
    <StyledButtonTopic {...props}>
      <FontsP.P2>{title}</FontsP.P2>
    </StyledButtonTopic>
  );
};
