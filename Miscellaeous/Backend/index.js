const express = require("express"); // Import Express

const app = express();

const port = 8080;

// Middleware to parse URL-encoded data and JSON data from POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Fixed: Added parentheses to call express.json()

// GET endpoint
app.get("/register", (req, res) => {
  let { user, password } = req.query; // Extract query parameters

  res.send(`Standard GET response = ${user}`);
});

// POST endpoint
app.post("/register", (req, res) => {
  let { user, password } = req.body; // Extract body parameters

  console.log(req.body);

  res.send(`Standard POST response = ${user}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
