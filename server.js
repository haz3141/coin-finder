// DEPENDENCIES
// =============================================================
const express = require('express');
const path = require('path');

// INSTANTIATE EXPRESS
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// SETUP EXPRESS DATA PARSING
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// START SERVER
// =============================================================
app.listen(PORT, function() {
	console.log(`App running at: http://localhost:${PORT}`);
});
