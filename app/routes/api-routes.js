// DEPENDENCIES
// ===============================================================================
const coinData = require("../data/coins");

// ROUTES
// ===============================================================================
module.exports = function(app) {
  // GET COINS
  app.get("/api/coins", function(req, res) {
    res.json(coinData);
  });

  // POST COINS
  app.post("/api/coins", function(req, res) {
    console.log("POST COINS");
  });
};
