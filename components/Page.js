import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const color = "white";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <button
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Click Me!
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
