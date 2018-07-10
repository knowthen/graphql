import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
schema {
  query: Query
}
# root query for our **Hello World Server**
type Query {
  # Says hello *world*
  hello: String
  """
  About names:

  1. Naming is [hard](https://bit.ly/2m5uhil)
  1. Everyone messes them up
  """
  name: String
}
`;

const resolvers = {
  Query: {
    hello: () => 'World',
    name: () => 'James',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});