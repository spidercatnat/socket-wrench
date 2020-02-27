import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import { connect } from "../context";

export const Router = connect(props => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
});
