const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express")
const { helloWorld } = require("./controllers");

class Routing {
  constructor(app, io) {
    this.app = app;
    this.io = io;
  }

  configure() {
    const { app, io } = this;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      app.use(cors());
      app.use(morgan("dev"));
    }
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.text({ type: "text/*" }));
    app.disable("x-powered-by");
  app.use(express.static("client/build"));
    app.use((req, res, next) => {
      req.socket = io;
      next();
    });
  }

  init() {
    const { app } = this;
    app.get("/api/*", helloWorld);
    const root = require("path").join(__dirname, "..", "client", "build");
    app.use(express.static(root));
    app.get("*", (req, res) => {
      res.sendFile("index.html", { root });
    });
  }
}

module.exports = async ({ app, io }) => {
  const routing = new Routing(app, io);
  routing.configure();
  routing.init();
};
