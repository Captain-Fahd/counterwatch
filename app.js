require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
//Middleware parser
app.use(express.urlencoded({ extended: true }));
//App routers
const indexRouter = require('./routes/indexRouter');

//App setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRouter);

//App listening
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});