import {Router} from 'express';
const indexRouter = Router();
import indexController from '../controllers/indexController';

indexRouter.get('/', indexController.index);
indexRouter.get('/counters/:name', indexController.getCounters);

module.exports = indexRouter;