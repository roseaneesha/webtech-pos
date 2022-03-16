const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("customer route");
});

module.exports = router;
