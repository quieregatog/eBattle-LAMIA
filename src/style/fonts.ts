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

const H3 = styled.h1``;

const H4 = styled.h1``;

const H5 = styled.h1``;

// Paragraph
const P1 = styled.p`
  font-family: "Comfortaa";
`;

const P2 = styled.p``;

// Links
const A1 = styled.a`
  font-family: "Comfortaa";
`;

const FontsH = { H1, H2, H3, H4, H5 };
const FontsP = { P1, P2 };
const FontsLink = { A1 };

export { FontsH, FontsP, FontsLink };
