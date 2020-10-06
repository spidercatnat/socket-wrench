import React, { Component, createRef } from "react";
import io from "socket.io-client";
import { Context } from "./";
import { publisher } from "../pubsub/with-emitter";

const { REACT_APP_SOCKET_PORT: SOCKET_PORT } = process.env;
const SOCKET_HOST = window.location.hostname;

class Provider extends Component {

  state = {
    hello_socketio: ""
  };

  socket = io(`http://${SOCKET_HOST}:${SOCKET_PORT}`);

  testApiCall = async () => {
    const apiCall = await fetch(`http://localhost:8080/api/test-endpoint`);
    console.log(await apiCall.json());
  }

  testSocketConn = () => {
    this.socket.on("HELLO_CLIENT", hello_socketio => this.setState({ hello_socketio }));
    this.socket.emit("HELLO_SERVER", "♫ Hello from the client side! ♫");
  }

  async componentDidMount() {
    this.testSocketConn();
    publisher.send("TEST_SUBSCRIPTION", { data: "Success!" })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
