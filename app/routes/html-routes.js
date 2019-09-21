// DEPENDENCIES
// =============================================================
const path = require("path");

// ROUTES
// =============================================================
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
