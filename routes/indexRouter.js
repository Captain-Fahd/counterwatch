import {Router} from 'express';
const indexRouter = Router();
import indexController from '../controllers/indexController.js';

indexRouter.get('/', indexController.getAllCharacters);
indexRouter.get('/counters/:name', indexController.getCounters);

export default indexRouter;