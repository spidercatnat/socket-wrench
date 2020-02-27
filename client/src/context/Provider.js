import React, { Component, createRef } from "react";
import io from "socket.io-client";
import { Context } from "./";

let { REACT_APP_SOCKET_PORT: SOCKET_PORT } = process.env;
let SOCKET_HOST;
if (window.location.hostname === "localhost") {
  SOCKET_HOST = "127.0.0.1";
} else {
  SOCKET_HOST = window.location.hostname;
}

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      hello_socketio: ""
    };
    this.socket = io(`http://${SOCKET_HOST}:${SOCKET_PORT}`);
  }

  async componentDidMount() {
    this.socket.on("HELLO_CLIENT", hello_socketio => this.setState({ hello_socketio }));
    this.socket.emit("HELLO_SERVER", "♫ Hello from the client side! ♫");
    const apiCall = await fetch(`http://localhost:8080/api/test-endpoint`);
    console.log(await apiCall.json())
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
