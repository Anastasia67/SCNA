// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Basis route voor de login-pagina
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

// Endpoint voor login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Hier kun je je eigen validatielogica implementeren
  if (email === "test@student.com" && password === "1234") {
    res.status(200).send({ message: "Login succesvol!" });
  } else {
    res.status(401).send({ message: "Ongeldige inloggegevens" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
