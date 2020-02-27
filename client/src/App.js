import React from "react";
import { Provider } from "./context";
import { Router } from "./router";

/** To do
 * - If not logged in, render without edit mode.
 * - If logged in, render Admin GUI.
 * - Create edit GUI that lets you drag and drop and upload media, and saves elements to database.
 */

export default () => (
  <Provider>
    <Router />
  </Provider>
);


