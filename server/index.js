require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router");
const { socket } = require("./socket");

async function start() {
  const io = await socket({ app });
  await router({ app, io });
  const port = process.env.PORT || 8080;
  app.use(express.static("client/build"));
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

start();
