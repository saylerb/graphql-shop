import React, { Component } from "react";

import Link from "next/link";

class About extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a title="Home Page">Home</a>
        </Link>
        <p>This is the about page</p>
      </div>
    );
  }
}

export default About;
