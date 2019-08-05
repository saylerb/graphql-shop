import React, { useState } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const theme = {
  red: "#D66853",
  maroon: "#7D4E57",
  grey: "#64156",
  black: "#11151C",
  green: "#04471C",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.green};
  color: white;
`;

const Page = props => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
