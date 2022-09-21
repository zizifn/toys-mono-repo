/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
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

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to trpc-express!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
