const expenseModel = require("../model/expenseModel");
const arimaModel = require("../model/arimaModel");
const moment = require('moment');

const getForecastData = async (req, res) => {
  try {
    const data = await expenseModel.find();
    if (data) {
      // Data Extraction
      const amountData = data?.map(item => ({
        date: new Date(item?.date),
        amount: item?.amount
      }));
      // console.log("Extracted Amount Data: ", amountData);

      // Sort Ascending
      amountData?.sort((a, b) => a?.date - b?.date);
      // console.log("Sorted Amount Data: ", amountData);

      // Prepare Data
      const timeSeriesData = amountData.map(item => item.amount);
      // console.log("Time Series Data: ", timeSeriesData);
      // console.log("Check Length: ", amountData.length, timeSeriesData.length);

      // Fit Model to Data
      arimaModel.train(timeSeriesData);

      // Predict Next 7 Days Data
      const [pred, errors] = arimaModel.predict(7);
      // console.log("Predicted Data: ", pred);

      const forecastData = pred.map((value, index) => {
        const date = moment(timeSeriesData[timeSeriesData.length - 1].date)
          .add(index + 1, 'day')
          .format('YYYY-MM-DD');
        return {
          date: date,
          amount: value
        };
      });
      // console.log(forecastData)
      res.status(200).send(forecastData);
    } 
    else {
      res.status(404).send({ message: "Record Not Found" });
    }
  } 
  catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getForecastData };