// /* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import { connectToDb } from './db';
import { PORT } from './config';
import schema from './graphql/executableSchema';
import applyAuthMiddleware from './middleware/applyAuthMiddleware';
import { botCommunication } from './api';

const startServer = async () => {
  // await connectToDb();

  const app = express();
  app.use(cors());

  applyAuthMiddleware(app);

  app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true,
    }),
  );

  app.post('/bot', botCommunication);

  const server = app.listen(PORT, () => {
    const { port } = server.address();
    console.log(`Server is now running on port ${port}`);
  });
};

startServer().catch((error) => {
  console.log(error);
});