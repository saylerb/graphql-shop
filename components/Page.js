import React, { useState } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const color = "white";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Page = props => {
  const [fontSize, setFontSize] = useState(100);

  return (
    <div>
      <Meta />
      <Header />
      <Button onClick={() => setFontSize(fontSize + 10)}>Click Me!</Button>
      <div
        css={css`
          font-size: ${fontSize}px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
          }
        `}
      >
        🌱
      </div>
      {props.children}
    </div>
  );
};

export default Page;
