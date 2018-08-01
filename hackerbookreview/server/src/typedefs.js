const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

# root query for hackerbooks review app
type Query {
  # books imported by users
  books(
    # book sort order
    orderBy: BooksOrderBy = RATING_DESC
  ): [Book]
  # book reviews by users
  reviews(
    # review sort order
    orderBy: ReviewsOrderBy = ID_DESC
  ): [Review]
  # an individual book
  book(
    # book id to fetch
    id: ID!
  ): Book
  # search google book api
  searchBook(
    # search term
    query: String!
  ): [SearchBookResult]
  # global app search
  search(
    # search term
    query: String!
  ): [SearchResult]
}

# global search result type
union SearchResult =  Book | Review | Author | User  

# a google book api search result
type SearchBookResult implements Entity {
  # google's unique book id
  id: ID!
  # book title
  title: String
  # book description
  description: String
  # book authors
  authors: [String]
  # book imageUrl
  imageUrl(
    # size of image to request from google book api/cdn
    size: ImageSize = LARGE
  ): String
}

# root mutation for hackerbook review app
type Mutation {
  # create a new book review
  createReview(
    # book review input object
    reviewInput: ReviewInput!
  ): Review
  # create book record from a google api book id
  createBook(
    # google book id of book to add/create
    googleBookId: ID!
  ): Book
}

# book review input object
input ReviewInput {
  # id of book being reviewed
  bookId: ID!
  # book rating 1-5
  rating: Int!
  # user/reviewer name
  name: String!
  # user/reviewer email
  email: String!
  # review title
  title: String
  # review comment
  comment: String
}
# review sort by options
enum ReviewsOrderBy {
  # order by review id ascending
  ID
  # order by review id descending
  ID_DESC
}

# book sort by options
enum BooksOrderBy {
  # order by highest to lowest rating
  RATING_DESC
  # order by newest id (ie most recently added book)
  ID_DESC
}

# A Book Review
type Review implements Entity {
  # review unique id  
  id: ID!
  # review rating 1-5
  rating: Int
  # review title
  title: String
  # review comment
  comment: String
  # book reviewed
  book: Book
  # user leaving the review
  user: User
}

# Book Reviewer/User
type User implements Entity & Person {
  # user unique id
  id: ID!
  # user name
  name: String
  # user image size 
  imageUrl(
    # see [gravatar docs](https://en.gravatar.com/site/implement/images/#size)
    size: Int = 50
  ): String
}

# book object
type Book implements Entity {
  # id of book
  id: ID!
  # book title
  title: String!
  # book description
  description: String!
  # book cover image url
  imageUrl(
    # Size of requested image
    size: ImageSize = LARGE
  ): String!
  # books average rating
  rating: Float
  # book subtitle
  subtitle: String
  # total number of rating
  ratingCount: Int
  # array of book author objects
  authors: [Author]
  # array of book review objects
  reviews: [Review]
}

# Book Author
type Author implements Entity & Person {
  # author unique id
  id: ID!
  # author name
  name: String
}

# book image size options
enum ImageSize {
  SMALL
  LARGE
}

# enum that forces types to have non-nullable ID
interface Entity {
  id: ID!
}

# A Person forces the type to include a name
interface Person {
  name: String
}
`;

export default typeDefs;
