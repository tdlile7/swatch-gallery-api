const express = require("express");
const router = express.Router();
const { Color } = require("../models/Color");

// @route      GET api/colors
// @desc       Get all colors from the database
// @access     Public
router.get("/", async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
