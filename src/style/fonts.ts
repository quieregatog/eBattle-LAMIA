import styled from "styled-components";
import { IFontsGlobal } from "../interface/IFonts";
import ColorsDesign from "./colors";

// Title
const H1 = styled.h1<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize + "px" || "32px"};
  line-height: 40px;
  color: ${(props) => props.color || ColorsDesign.dark};
`;

const H2 = styled.h2``;

const H3 = styled.h3<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "64px"};
  line-height: 80px;
  color: ${(props) => props.color || ColorsDesign.font};
`;

const H4 = styled.h4``;

const H5 = styled.h5<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  color: ${(props) => props.color || ColorsDesign.font};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "27px"};
  line-height: 34px;
`;

// Paragraph
const P1 = styled.p<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "25px"};
  line-height: 28px;
  color: ${(props) => props.color || ColorsDesign.font};
`;

const P2 = styled.p<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "27px"};
  line-height: 34px;
`;

const P3 = styled.p<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "16px"};
  line-height: 18px;
`;

// Links
const A1 = styled.a<IFontsGlobal>`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "18px"};
  line-height: 20px;
  text-decoration: none;

  color: ${(props) => props.color || ColorsDesign.secondary};
`;

export const Legend1 = styled.legend<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "40px"};
  line-height: 50px;
`;

const T1 = styled.p<IFontsGlobal>`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize + "px" || "32px"};
  color: ${(props) => props.color || ColorsDesign.dark};

  /* line-height: 40px; */
`;

const FontsH = { H1, H2, H3, H4, H5 };
const FontsP = { P1, P2, P3 };
const FontsLink = { A1 };
const FontsT = { T1 };

export { FontsH, FontsP, FontsLink, FontsT };
