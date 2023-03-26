import React from "react";
import { unsplash } from "../../assets/images";
import { IGlobalAttributes } from "../../interface/IGlobal";
import { StyledUnsplash } from "./styled";

export const UnsplashComponent: React.FC<IGlobalAttributes> = ({
  ...props
}) => {
  return <StyledUnsplash {...props} backgroundImage={unsplash} />;
};
