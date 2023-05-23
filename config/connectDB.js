const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qujfvjg.mongodb.net/expenseTracker`)
    console.log("MongoDB is connected");
  }
  catch(error) {
    console.log("MongoDB is not connected");
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;