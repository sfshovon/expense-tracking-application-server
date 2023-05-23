const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./config/connectDB");
// const expenseRouter = require("./routes/expenseRoutes");
const { getExpenses, addExpense, deleteExpense, updateExpense } = require("./controllers/expenseControllers")
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/expenseRecord", getExpenses);
app.post("/expenseRecord", addExpense);
app.delete("/expenseRecord/:id", deleteExpense);
app.put("/expenseRecord/:id", updateExpense);

app.get("/", (req, res)  => {
  res.send("Expense Tracking App's server is running");
})

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
})