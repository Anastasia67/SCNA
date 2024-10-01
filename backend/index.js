// backend/index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Basis route voor de login-pagina
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
