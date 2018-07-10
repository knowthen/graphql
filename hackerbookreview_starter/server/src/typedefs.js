const typeDefs = `
schema {
  query: Query
}
type Query {
  books: [Book]
}
type Book {
  id: ID!
  title: String!
  description: String!
  imageUrl: String!
  rating: Float
}
`;

export default typeDefs;