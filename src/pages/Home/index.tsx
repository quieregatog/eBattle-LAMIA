import React from "react";
import { WaveComponents } from "../../components/Details/Wave";
import NavBar from "../../components/NavBar";
import { PageStyled } from "../styled";

const HomePage = () => {
  return (
    <PageStyled>
      <NavBar />
      <WaveComponents />
    </PageStyled>
  );
};

export default HomePage;
