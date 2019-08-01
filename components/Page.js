import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

import styled from "@emotion/styled";

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

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Button>Click Me!</Button>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
