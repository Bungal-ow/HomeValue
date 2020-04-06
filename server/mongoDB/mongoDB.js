const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/homevalue', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log('Successfuly connected to DB...'))
.catch(() => console.log('Failed to connect to DB...'))

let homeValueSchema = mongoose.Schema({
  id: Number,
  address: String,
  zipcode: Number,
  onMarket: Boolean,
  sqdtCount: Number,
  bedCount: Number,
  bathCount: Number,
  currentEstimatedValue: Number,
  pictureUrl: String,
  date: String,
  estimatedHomeValue: Number,
  estimatedAreaValue: Number,
  estimatedCityValue: Number
  
});

let homevalue = mongoose.model('homevalue', homeValueSchema);



module.exports = {homevalue}