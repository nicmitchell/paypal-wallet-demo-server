const mongoose = require('mongoose');
const Account = mongoose.model('Account');

// GET actions
exports.fetchAccounts = (req, res, next) => {
  return Account.find()
    .then((accounts) => { 
      res.send(accounts) 
    })
    .catch((err) => { 
      throw Error(err) 
    });
};

// POST actions
exports.addCard = (req, res, next) => {
  const newAccount = new Account(req.body);
  return newAccount.save()
    .then((snapshot) => {
      res.send(snapshot)
    })
    .catch((err) => { 
      throw Error(err) 
    });
};

exports.deleteCard = (req, res, next) => {
  const id = req.body._id;
  return Account.findByIdAndRemove(id)
    .then((snapshot) => {
      res.send({ id })
    })
    .catch((err) => { 
      throw Error(err) 
    });
};