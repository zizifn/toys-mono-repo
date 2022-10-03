import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';

// created for each request
export const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({
    url: req.url,
    name: 'james'
  }); // no context
type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
    greeting: t.procedure.query(() => 'hello tRPC v10!'),
    // Create procedure at path 'hello'
    hello: t.procedure.query((
        {input, ctx}
    ) => {
        return {
            greeting: 'hello world',
        };
    }),
    getUser: t.procedure.input(z.string()).query((req) => {
        // req.input; // string
        console.log(req.input);
        return { id: req.input, name: 'Bilbo' };
    }),
    createUser: t.procedure
        .input(z.object({ name: z.string().min(5) }))
        .mutation(async (req) => {
            // use your ORM of choice
            return {
                msg: 'update success'
            }
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;