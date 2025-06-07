//importing dotenv
import dotenv from 'dotenv';
dotenv.config();

//Importing other vars`
import express from 'express';
import path from 'node:path';
import indexRouter from './routes/indexRouter.js';
const app = express();

//Middleware parser
app.use(express.urlencoded({ extended: true }));
//App routers

//App setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', indexRouter);

//App listening
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});