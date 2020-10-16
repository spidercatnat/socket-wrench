import React, { Component } from "react";
import io from "socket.io-client";
import { Context } from "./";
import { publisher } from "../pubsub";

const { REACT_APP_SOCKET_PORT: SOCKET_PORT } = process.env;
const SOCKET_HOST = window.location.hostname;

class Provider extends Component {

  state = {
    passedDownFromProvider:  "ฅ^•ﻌ•^ฅ" 
  };

  socket = io(`http://${SOCKET_HOST}:${SOCKET_PORT || 9998}`);

  testSocketConn = () => {
    this.socket.on("CONTROL_SET", payload => {
      publisher.dispatch(payload.key, payload);
      // console.log(payload)
    });
    this.socket.emit("HELLO_SERVER", "♫ Hello from the client side! ♫");
  }

  componentDidMount() {
    this.testSocketConn();
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