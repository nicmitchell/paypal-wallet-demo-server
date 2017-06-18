const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  firstName: {
    type: String,
    trim: true, 
    required: 'Please give a first name'
  },
  lastName: {
    type: String,
    trim: true, 
    required: 'Please give a last name'
  },
  accountType: {
    type: String,
    trim: true, 
    required: 'Please select an account type'
  },
  cardNumber: {
    type: String,
    trim: true, 
    required: 'Please enter a valid card number'
  },
  expiration: {
    type: String,
    trim: true, 
    required: 'Please enter a valid expiration date'
  },
  csc: {
    type: Number,
    trim: true, 
    required: 'Please enter the security code'
  },
});

module.exports = mongoose.model('Account', accountSchema);