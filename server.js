// require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const session = require('express-session');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// set up express app
const app = express();

// connect to DB
require('./config/database');

// configure the app with app.set()
app.set('view engine', 'ejs');

// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false
}));

// mount routes with app.use()
app.use('/', indexRouter);
app.use('/users', usersRouter);

// tell app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});