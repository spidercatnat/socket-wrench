import React, { Component } from "react";
import { HelloWorld } from "../../components";
import { connect } from "../../context";

const Home = connect(
  class extends Component {
    render() {
      const {
        props: { passedDownFromProvider },
      } = this;
      return (
        <HelloWorld topic="HELLO_CLIENT" {...{ passedDownFromProvider }} />
      );
    }
  }
);

export { Home };
