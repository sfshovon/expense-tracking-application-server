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
  categories: Object,
  date: {
    type: Date,
    required: true
  },
  notes: String
});

const expenseModel = mongoose.model("expense_records", expenseSchema);

module.exports = expenseModel;