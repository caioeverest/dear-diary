if (process.env.NODE_ENV !== 'production') {
  console.log('ENV:', process.env.NODE_ENV);
  require('dotenv').config();
  require('./bundle');
}
require('./server'); // eslint-disable-line
