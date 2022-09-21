import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@zizifn/trpc-express';


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
    name: 'test-zizifn'
  });

  const result3 = await client.hello.query();

  console.log(result2);

})();
