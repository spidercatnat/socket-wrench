import React, { Component } from "react";
import { HelloWorld } from "../../components"
import { connect } from "../../context";

const Home = connect(
  class extends Component {
    render() {
      const {
        props: { hello_socketio }
      } = this;
      return (
        <HelloWorld topic="TEST_SUBSCRIPTION" hello_socketio={hello_socketio} />
      );
    }
  }
);

export { Home };
