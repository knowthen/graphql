const typeDefs = `
schema {
  query: Query
}
type Query {
  books(orderBy: BooksOrderBy = RATING_DESC): [Book]
  reviews(orderBy: ReviewsOrderBy = ID_DESC): [Review]
}
enum ReviewsOrderBy {
  ID
  ID_DESC
}
enum BooksOrderBy {
  RATING_DESC
  ID_DESC
}
type Review {
  id: ID!
  rating: Int
  title: String
  comment: String
  book: Book
  user: User
}
type User {
  id: ID!
  name: String  
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
