const express = require('express');
const app = express();
const { projects } = require('./data.json');

const router = require('./routes');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.use(router);

app.listen(3000, () => {
    console.log('The app is running on localhost:3000.')
});