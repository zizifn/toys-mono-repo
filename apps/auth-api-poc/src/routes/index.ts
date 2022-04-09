import { Router } from 'express';
import { openTelCounterHTTP } from '../utils/opnetel-metric'
const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.rawHeaders);
  if (res.statusCode === 200) {
    const attributes = { api: 'index' };
    openTelCounterHTTP.add(1, attributes);
  }
  res.render('index', { title: 'Express' });
});

export default router;
