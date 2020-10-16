import React from "react";
import { About, Home } from "../views";
import { withRouter } from "react-router-dom";

export const routes = [
  {
    path: "/",
    name: "home",
    Component: withRouter(Home),
  },
  {
    path: "/about",
    name: "about",
    Component: withRouter(About),
  }
];
