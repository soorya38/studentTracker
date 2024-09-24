const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
//attendance
app.use("/dates", (req, res) => {
  const date = new Date("2024-09-21");
  const date1 = new Date("2024-09-22");
  console.log("connected!");
  res.json([date, date1]);
});

app.use("/subjects", (req, res) => {
  const data = ["maths", "chemistry", "physics", "cs", "bio"];
  res.json(data);
});
app.use("/marks", (req, res) => {
  const data = [8, 5, 9, 10, 7];
  res.json(data);
});
app.use("/completion-value", (req, res) => {
  const data = 12;
  res.json(data);
});
app.use("/submission-dates", (req, res) => {
  const data = {
    dates: [
      { date: "2024-01-01" },
      { date: "2024-01-22" },
      { date: "2024-01-30" },
      { date: "2024-03-30" },
    ],
  };
  res.json(data);
});
app.use("/extra-curricular-activities", (req, res) => {
  const data = [
    { id: 0, value: 10, label: "Games" },
    { id: 1, value: 15, label: "Academics" },
    { id: 2, value: 20, label: "Travel" },
  ];
  res.json(data);
});

app.listen(3030, () => {
  console.log("Listening on port 3030");
});
