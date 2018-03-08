const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');

const { sessionSecret } = require('./config');
require('./database/dbConfig');
require('./models/user');
const auth = require('./routes/auth');
const api = require('./routes/payment');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: sessionSecret,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
