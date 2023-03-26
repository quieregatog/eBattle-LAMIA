import { AiOutlineSearch } from "react-icons/ai";
import { IInputSearch } from "../../interface/IInput";
import { StyledSearchInput } from "./styled";

export const InputSearch: React.FC<IInputSearch> = ({
  className,
  id,
  ...props
}) => {
  return (
    <StyledSearchInput className={className} id={id}>
      <input {...props} className="input-search" />
      <AiOutlineSearch size={30} />
    </StyledSearchInput>
  );
};
