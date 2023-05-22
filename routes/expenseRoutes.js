const { getExpenses, addExpense, deleteExpense } = require("../controllers/expenseControllers");
const express = require("express");
const router = express.Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.delete("/:id", deleteExpense);

module.exports = router;