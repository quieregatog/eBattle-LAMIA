import styled from "styled-components";
import ColorsDesign from "./colors";

// Title
const H1 = styled.h1`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: ${ColorsDesign.dark};
`;

const H2 = styled.h1``;

const H3 = styled.h1`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 80px;
  color: ${ColorsDesign.font};
`;

const H4 = styled.h1``;

const H5 = styled.h1`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 34px;
`;

// Paragraph
const P1 = styled.p`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 28px;
  color: ${ColorsDesign.font};
`;

const P2 = styled.p`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 34px;
`;

const P3 = styled.p`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`;

// Links
const A1 = styled.a`
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${ColorsDesign.secondary};
`;

export const Legend1 = styled.legend`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
`;

const T1 = styled.p`
  font-family: "Oxanium";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
`;

const FontsH = { H1, H2, H3, H4, H5 };
const FontsP = { P1, P2, P3 };
const FontsLink = { A1 };
const FontsT = { T1 };

export { FontsH, FontsP, FontsLink, FontsT };
