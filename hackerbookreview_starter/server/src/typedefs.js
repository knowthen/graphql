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
  imageUrl(size: ImageSize = LARGE): String!
  rating: Float
  subtitle: String
  ratingCount: Int
}

enum ImageSize {
  SMALL
  LARGE
}
`;

export default typeDefs;