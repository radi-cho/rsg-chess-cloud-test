"use strict";

const express = require("express");
const { Game, AI } = require("rsg-chess");
const { performance } = require('perf_hooks');

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Hello, world!")
    .end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  var t0 = performance.now();
  runRSGChess();
  var t1 = performance.now();
  console.log("Call to RSG Chess' AI took " + (t1 - t0) + " milliseconds.");
});

const runRSGChess = () => {
  const game = Game.prototype.initializeGame();
  const getAI = AI(4, game, true);
  console.log(getAI);
};
