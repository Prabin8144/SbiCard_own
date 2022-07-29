const express = require("express");
const connection = require("./db");
const authRouter = require("./routes/auth.route");
const formRouter = require("./routes/form.route");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/auth",authRouter);
app.use("/form",formRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/post", (req, res) => {
  res.send("Helathy");
});

app.listen(port, async () => {
  try {
    console.log(`Server listening on ${port}`);
  } catch {
    console.log("Error occured while starting server");
  }
});
