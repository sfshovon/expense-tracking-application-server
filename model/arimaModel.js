const Arima = require('arima');

const arimaModel = new Arima({ p: 2, d: 1, q: 2, P: 0, D: 0, Q: 0, S: 0, verbose: false }); //Parameters with value 0 refers that data may not exhibit seasonal patterns like weekly, monthly, yearly cycles.
// const arimaModel = new Arima({ default: false});

module.exports = arimaModel;