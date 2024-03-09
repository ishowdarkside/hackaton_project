const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const errorController = require("./controllers/errorController");
const openaiRouter = require("./routes/openai");
const AuthRouter = require("./routes/auth");
const app = express();

//openai routing
app.use(express.json());
app.use("/api/ai", openaiRouter);
app.use("/api/auth", AuthRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found!",
  });
});

app.use(errorController);

module.exports = app;
