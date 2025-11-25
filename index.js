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
app.get("/math/rectangle/:width/:height", (req, res) => {
  const { width, height } = req.params
  const w = Number(width)
  const h = Number(height)
  const result = {
    area: w*h,
    circumference: w+w+h+h
  }
  res.json(result);
});
//TODO3
app.get("/math/power/:base/:exponent", (req, res) => {
  const { base, exponent } = req.params
  const { root } = req.query
  const b = Number(base)
  const e = Number(exponent)
  const r = Boolean(root)
  if (isNaN(b) || isNaN(e)) {
    res.status(400).json({ error: "Invalid input" });
  }
  else if (r) {
    const result = {
      result: Math.pow(b, e),
      root: Math.pow(b, 1/e)
    }
    res.json(result);
  }
   else {
     const result = {
       result: Math.pow(b, e)
     }
     res.json(result);
   }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
