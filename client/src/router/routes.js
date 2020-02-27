import React from "react";
import { Home } from "../views";
import { withRouter } from "react-router-dom";

export const routes = [
  {
    path: "/",
    name: "home",
    Component: withRouter(Home),
  }
];
