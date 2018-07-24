import { allBooks, imageUrl, findBookById } from './book';
import { authorsByBookId } from './author';
import { allReviews } from './review';

const resolvers = {
  Book: {
    imageUrl: (book, { size }) => imageUrl(size, book.googleId),
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
    },
  },
  Review: {
    book: (review, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findBooksByIdsLoader.load(review.bookId);
    },
    user: (review, args, context) => {
      const { loaders } = context;
      const { findUsersByIdsLoader } = loaders;
      return findUsersByIdsLoader.load(review.userId);
    },
  },
  Query: {
    books: (root, args) => {
      return allBooks(args);
    },
    reviews: (root, args) => {
      return allReviews(args);
    },
  },
};

export default resolvers;
