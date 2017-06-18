const mongoose = require('mongoose');
const Account = mongoose.model('Account');

exports.addCard = async (req, res, next) => {
  console.log('req.body', req.body);
  const newAccount = new Account(req.body);
  await newAccount.save((err, snapshot) => {
    if (err) {
      throw Error(err);
    } else {
      res.send(snapshot);
    }
  });
  next();
}

exports.deleteCard = async (req, res, next) => {
  const id = req.body.id;
  Account.findByIdAndRemove(id, (err, snapshot) => {
    res.send(snapshot);
  })
  next();
}