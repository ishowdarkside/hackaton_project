const express = require("express");
const AuthRouter = express.Router();
const path = require("path");
const { signup, login } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "auth"
));

AuthRouter.post("/register", signup);
AuthRouter.post("/login", login);

module.exports = AuthRouter;
