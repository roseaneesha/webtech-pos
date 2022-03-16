const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./config/db");
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/customer", require("./routes/api/cutomer"));
app.use("/api/inventory", require("./routes/api/inventory"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/order", require("./routes/api/order"));

app.get("/", (req, res) => {
  res.send("hiiii");
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
