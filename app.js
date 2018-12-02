"use strict";

const express = require("express");
const { Game, AI } = require("rsg-chess");
const { performance } = require("perf_hooks");

const app = express();

app.get("/", (_, res) => {
  res
  .status(200)
  .send(runRSGChess(4))
  .end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {});

const runRSGChess = (depth) => {
  const t0 = performance.now();
  const game = Game.prototype.initializeGame();
  const getAI = AI(depth, game, true);
  const t1 = performance.now();
  return `Call to RSG Chess' AI with depth ${depth} took ${t1 - t0} milliseconds. \n Result: ${JSON.stringify(getAI)}`;
};
