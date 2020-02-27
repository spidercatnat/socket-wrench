import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "./routes";
import { connect } from "../context";

export const Router = connect(props => {
  return (
    <BrowserRouter>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
    </BrowserRouter>
  );
});
