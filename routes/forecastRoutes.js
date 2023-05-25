const { getForecastData } = require("../controllers/forecastController");
const express = require("express");
const router = express.Router();

router.get("/", getForecastData);

module.exports = router;