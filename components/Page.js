import React, { useState } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/core";

const Button = styled.button`
  padding: 32px;
  background-color: ${props => (props.primary ? "hotpink" : "turquoise")};
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

const Page = props => {
  const [spinSpeed, setSpinSpeed] = useState(2);

  return (
    <div>
      <Meta />
      <Header />
      <span>{spinSpeed}s</span>
      <Button primary onClick={() => setSpinSpeed(spinSpeed + 0.5)}>
        Slowers
      </Button>
      <Button
        onClick={() => {
          if (spinSpeed - 0.5 > 0) {
            setSpinSpeed(spinSpeed - 0.5);
          }
        }}
      >
        Fasters
      </Button>
      <div
        css={css`
          font-size: 100px;
          display: inline-block;
          animation: ${spinSpeed}s ${spin} linear infinite;

          &:hover {
            animation: ${spinSpeed}s ${spin} linear infinite reverse;
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
