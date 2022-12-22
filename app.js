const express = require('express');
const app = express();
const { projects } = require('./data.json');

const router = require('./routes');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use(router);

// 404 function will be here
app.use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

// general error handler will be here.
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.locals.message = err.message;
    
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('The app is running on localhost:3000.')
});