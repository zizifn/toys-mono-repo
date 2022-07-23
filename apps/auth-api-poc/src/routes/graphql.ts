import { ApolloServer } from "apollo-server-express";
import { Router } from "express";
import { resolvers } from "./graphql/resolvers"
import { typeDefs } from "./graphql/typeDefs"

const router = Router();

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: false,
        cache: 'bounded'
    });
    await server.start();
    router.use("/*", server.getMiddleware(
        {
            path:"/",
            cors: false
        }
    ));
}

startApolloServer(typeDefs, resolvers);
export default router;