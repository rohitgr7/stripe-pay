const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');
const path = require('path');

const { sessionSecret } = require('./config');
require('./database/dbConfig');
require('./models/user');
const auth = require('./routes/auth');
const api = require('./routes/payment');

// Express Instance
const app = express();

// Middlewares
// app.use(compression());
// app.use(helmet());
app.use(bodyParser.json());

// Express-session Middleware
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

// Passport Middleware Initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', auth);
app.use('/api', api);

// Express static config
if (process.env.NODE_ENV === 'production') {
  const publicPath = path.join(__dirname, '..', 'build');
  app.use(express.static(publicPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
}

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
