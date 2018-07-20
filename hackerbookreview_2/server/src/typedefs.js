const typeDefs = `
schema {
  query: Query
}
type Query {
  books: [Book]
  reviews: [Review]
}
type Review {
  id: ID!
  rating: Int
  title: String
  comment: String
  book: Book
}
type Book {
  id: ID!
  title: String!
  description: String!
  imageUrl(size: ImageSize = LARGE): String!
  rating: Float
  subtitle: String
  ratingCount: Int
  authors: [Author]
}

type Author {
  id: ID!
  name: String
}

enum ImageSize {
  SMALL
  LARGE
}
`;

export default typeDefs;