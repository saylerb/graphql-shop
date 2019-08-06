import React, { useState } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";

const theme = {
  red: "#D66853",
  maroon: "#7D4E57",
  grey: "#364156",
  lightGrey: "#A3A8B2",
  black: "#11151C",
  green: "#04471C",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  desktopSize: "1300px"
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
      <Global
        styles={theme => css`
          @font-face {
            font-family: "Merriweather";
            font-style: normal;
            font-weight: 400;
            src: local("Merriweather Regular"), local("Merriweather-Regular"),
              url("/static/merriweather-v21-latin-regular.woff2")
                format("woff2"),
              url("/static/merriweather-v21-latin-regular.woff") format("woff");
          }
          html {
            box-sizing: border-box;
            font-size: 10px;
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            font-family: "Merriweather", serif;
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            line-height: 2;
          }
          a {
            text-decoration: none;
            color: ${theme.green};
          }
          a:hover {
            color: ${theme.red};
          }
        `}
      />
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
