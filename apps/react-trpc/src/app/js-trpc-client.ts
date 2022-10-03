import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// import type { AppRouter } from '@zizifn/trpc-express';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import type { AppRouter } from '../../../trpc-express/src/app/trpcRouter';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3333/trpc',
    }),
  ],
});

(async ()=> {
  const result = await client.getUser.query('ddd');
  console.log(result)

  const result2 = await client.createUser.mutate({
    name: 'test-zizifn',
    // name2: 'test1111'
  });

  console.log(result2);

  const result3 = await client.hello.query();
  console.log(result3);

})();
