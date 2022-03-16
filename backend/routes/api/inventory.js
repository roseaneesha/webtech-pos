const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("inventory route");
});

module.exports = router;
