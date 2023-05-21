const expenseModel = require("../model/expenseModel")

const getExpenses = async (req, res) => {
  try {
    const expenses = await expenseModel.find();
    if(expenses) {
      res.status(200).send(expenses)
    }
    else {
      res.status(404).send({ message: "Record Not Found"})
    }
  }
  catch (error) {
    res.status(500).send({message: error.message})
  }
};

const addExpense = async (req, res) => {
  try{
    const { title, amount, categories, date, notes } = req.body;
    const newExpense = new expenseModel({
      title, 
      amount, 
      categories, 
      date, 
      notes 
    })
    const expenseData = await newExpense.save();
    res.status(201).send(expenseData);
  }
  catch(error) {
    res.status(500).send({message: error.message})
}
};

module.exports = { getExpenses, addExpense };