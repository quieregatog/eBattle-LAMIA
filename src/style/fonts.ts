import styled from "styled-components";
import { IFontsGlobal } from "../interface/IFonts";
import ColorsDesign from "./colors";

// Title
const H1 = styled.h1<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "32px"};
  line-height: 40px;
  color: ${(props) => props.color || ColorsDesign.dark};
  margin: 0;
  padding: 0;
`;

const H2 = styled.h2``;

const H3 = styled.h3<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "64px"};
  line-height: 80px;
  color: ${(props) => props.color || ColorsDesign.font};
  margin: 0;
  padding: 0;
`;

const H4 = styled.h4``;

const H5 = styled.h5<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "27px"};
  line-height: 34px;
  margin: 0;
  padding: 0;
`;

// Paragraph
const P1 = styled.p<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "25px"};
  line-height: 28px;
  color: ${(props) => props.color || ColorsDesign.font};
  margin: 0;
  padding: 0;
`;

const P2 = styled.p<IFontsGlobal>`
  margin: 0;
  padding: 0;
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "27px"};
  line-height: 34px;
`;

const P3 = styled.p<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 18px;
  margin: 0;
  padding: 0;
`;

// Links
const A1 = styled.a<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 20px;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || ColorsDesign.secondary};
`;

export const Legend1 = styled.legend<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "40px"};
  line-height: 50px;
  margin: 0;
  padding: 0;
`;

const T1 = styled.p<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "32px"};
  color: ${(props) => props.color || ColorsDesign.dark};
  margin: 0;
  padding: 0;
  /* line-height: 40px; */
`;

const FontsH = { H1, H2, H3, H4, H5 };
const FontsP = { P1, P2, P3 };
const FontsLink = { A1 };
const FontsT = { T1 };

export { FontsH, FontsP, FontsLink, FontsT };
