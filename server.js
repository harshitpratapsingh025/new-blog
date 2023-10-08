import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { expressMiddleware } from '@apollo/server/express4';
import createApolloGraphqlServer from './src/graphql/index.js ';
import { connect } from './src/config/db.js';
dotenv.config();

connect();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from my blog update 12334</h1>');
});

app.use(
  '/graphql',
  expressMiddleware(await createApolloGraphqlServer(), {
    context: async ({ req }) => {
      // @ts-ignore
      const token = req.headers['token'];
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return { user };
      } catch (error) {
        return {};
      }
    },
  }),
);

app.listen(port, () => console.log(`Servet started running on port:${port}`));
