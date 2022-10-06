/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import 'express-async-errors'
import * as trpcExpress from '@trpc/server/adapters/express';
import * as cors from 'cors';
import { appRouter, createContext } from './app/trpcRouter';

const app = express();

app.use(cors(
  {
    origin: true,
  }
))

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  }),
);

async function test(req, res) {
  //

  setTimeout(async () => {
    throw { msg: 'dddd' }
    const value_1 = await Promise.resolve(11);
    return res.send({ message: 'Welcome to trpc-express!' });
  }, 100);

}
app.get('/api', test);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
