import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hey I'm the Container</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
