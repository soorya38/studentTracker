const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/data", (req, res) => {
  const date = new Date("2024-09-21");
  console.log("connected!");
  res.json([date]);
});

app.listen(3030, () => {
  console.log("Listening on port 3030");
});
