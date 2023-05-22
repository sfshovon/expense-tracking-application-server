const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  categories: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
});

const expenseModel = mongoose.model("expense_records", expenseSchema);

module.exports = expenseModel;