//importing dotenv
import 'dotenv/config.js';
//Importing other vars`
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import indexRouter from './routes/indexRouter.js';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
export const supabaseKey = process.env.SUPABASE_KEY;
export const supabaseUrl = process.env.SUPABASE_URL;

//Middleware parser
app.use(express.urlencoded({ extended: true }));
//App routers

//App setup
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use('/', indexRouter);

//App listening
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});