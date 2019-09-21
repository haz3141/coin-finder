// DEPENDENCIES
// =============================================================
const express = require("express");

// INSTANTIATE EXPRESS
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// SETUP EXPRESS DATA PARSING
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// =============================================================
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

// START SERVER
// =============================================================
app.listen(PORT, function() {
  console.log(`App running at: http://localhost:${PORT}`);
});
