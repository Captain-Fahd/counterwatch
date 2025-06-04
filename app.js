require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});