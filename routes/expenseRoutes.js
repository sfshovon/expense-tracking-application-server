const { getExpenses, addExpense } = require("../controllers/expenseControllers");
const express = require("express");
const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpense);

module.exports = router;