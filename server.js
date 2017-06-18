const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// Connect to DB
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message); // eslint-disable-line no-console
});

require('./models');

const app = require('./app');
app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`); // eslint-disable-line no-console
});
