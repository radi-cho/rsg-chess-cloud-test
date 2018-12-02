const { Game, AI } = require("rsg-chess");
const { performance } = require("perf_hooks");

const t0 = performance.now();
runRSGChess();
const t1 = performance.now();
console.log("Call to RSG Chess' AI took " + (t1 - t0) + " milliseconds.");

const runRSGChess = () => {
  const game = Game.prototype.initializeGame();
  const getAI = AI(5, game, true);
  console.log(getAI);
};
