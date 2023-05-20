const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qujfvjg.mongodb.net/`)
    console.log("MongoDB is connected");
  }
  catch(error) {
    console.log("MongoDB is not connected");
    console.log(error.message);
    process.exit(1);
  }

}

app.get("/", (req, res)  => {
  res.send("Expense Tracking App's server is running");
 
})

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB();
})