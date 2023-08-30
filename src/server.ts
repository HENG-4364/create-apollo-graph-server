import express, { Request, Response } from 'express';
// import * as pgk from 'package.json';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import loadMergeSchema from './libs/loadMergeSchema';
import { Resolvers } from './resolvers';
import cors from 'cors';
async function CreateApolloserver() {
  const app = express();
  // app.use('/version', (req: Request, res: Response) => {
  //   res.json({
  //     version: pgk.version,
  //     name: pgk.name,
  //   });
  // });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const server = new ApolloServer({
    typeDefs: loadMergeSchema,
    resolvers: Resolvers,
  });

  await server.start();
  app.use(
    '/graph',
    cors<cors.CorsRequest>({
      origin: '*',
    }),
    express.json(),
    expressMiddleware(server, {})
  );
  app.listen({ port: 8080 }, () => {
    console.log('server is running on port 8080');
  });
}
CreateApolloserver();
