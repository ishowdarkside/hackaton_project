const express = require("express");
const path = require("path");
const { prompt } = require(path.join(__dirname, "..", "controllers", "openai"));
const router = express.Router();

router.post("/prompt-ai", prompt);

module.exports = router;
