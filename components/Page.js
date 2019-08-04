import React, { useState } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const Page = props => {
  return (
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
    </StyledPage>
  );
};

export default Page;
