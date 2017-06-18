const express = require('express');
const router = express.Router();
const actions = require('./actions');

const catchErrors = (func) => {
  return function(req, res, next) {
    return func(req, res, next).catch(next);
  };
};


router.get('/', (req, res) => {
  console.log(`Hey! I'm a route!`);
  // res.send(`Hey! I'm a route!`);
});

router.post('/api/add-card', catchErrors(actions.addCard));
router.post('/api/delete-card', catchErrors(actions.deleteCard));

module.exports = router;
