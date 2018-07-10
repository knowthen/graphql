import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
schema {
  query: Query
}
type Query {
  hello: String
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

const query = process.argv[2];

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 2));
});
