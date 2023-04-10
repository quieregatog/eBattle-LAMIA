import React from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { ColorsDesign } from "../../style";
import { FontsT } from "../../style/fonts";
import { ChipUpdateCardStyled } from "./styled";

export const UpdateChip: React.FC<IGlobalAttributes> = ({
  children,
  ...props
}) => {
  return (
    <ChipUpdateCardStyled {...props}>
      {children}
      <div className="buttons">
        <FontsT.T1
          className="fonts-t"
          fontSize={22}
          color={ColorsDesign.secondary}
        >
          Duplicar
          <HiOutlineDocumentDuplicate
            color={ColorsDesign.secondary}
            size={26}
          />
        </FontsT.T1>
        <FontsT.T1
          className="fonts-t"
          fontSize={22}
          color={ColorsDesign.primary}
        >
          excluir
          <IoTrashOutline color={ColorsDesign.primary} size={26} />
        </FontsT.T1>
      </div>
    </ChipUpdateCardStyled>
  );
};
