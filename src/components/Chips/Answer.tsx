import React from "react";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { FontsT } from "../../style/fonts";
import { AwnserStyled } from "./styled";

interface IAwnser extends IGlobalAttributes {
  id_awnswer: number;
  name: string;
}

export const Answer: React.FC<IAwnser> = ({ id_awnswer, name, ...props }) => {
  return (
    <AwnserStyled {...props}>
      <div className="question-awnser">
        <FontsT.T1
          fontSize={17}
          className="text-ask"
          style={{ margin: 0 }}
          fontWeight={300}
          color={"rgba(0, 0, 0, 0.6);"}
        >
          {id_awnswer})
        </FontsT.T1>
        <FontsT.T1
          fontSize={17}
          className="text-ask"
          style={{ margin: 0 }}
          fontWeight={300}
          color={"rgba(0, 0, 0, 0.6);"}
        >
          {name}
        </FontsT.T1>
      </div>
    </AwnserStyled>
  );
};
