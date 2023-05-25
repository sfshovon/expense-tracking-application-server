const Arima = require('arima');

const arimaModel = new Arima({ p: 2, d: 2, q: 2, verbose: false });

module.exports = arimaModel;