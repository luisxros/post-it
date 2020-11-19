// require modules
const express = require('express');
const $ = require('jquery');
const jsdom = require('jsdom');
const morgan = require('morgan');
const methodOverride = require('method-override');
const authorization = require('./utils/authorization');
const port = 3000;
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

// set up express app
const app = express();

// connect to DB
require('./config/database');

// configure the app with app.set()
app.set('view engine', 'ejs');

// mount middleware with app.use()
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false
}));
app.use(authorization.addUserToRequest);

// mount routes with app.use()
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/', commentsRouter);

// tell app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});
