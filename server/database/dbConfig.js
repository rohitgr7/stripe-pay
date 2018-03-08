const mongoose = require('mongoose');
const { mongoURI } = require('./../config');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, () => {
  console.log('Database is connected');
});
