"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here
app.get("/math/circle/:r", (req, res) => {
  const { r } = req.params;
  const radnum = Number(r);
  const result = {
    area: Math.PI * radnum * radnum,
    circumference: 2 * Math.PI * radnum
  }
  res.json(result);
});

//TODO2

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
