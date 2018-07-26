import gravatar from 'gravatar';
import { allBooks, imageUrl, findBookById } from './book';
import { authorsByBookId } from './author';
import { allReviews } from './review'; 

const resolvers = {
  User: {
    imageUrl: (user, args) => gravatar.url(user.email, { s: args.size }),
  },
  Book: {
    imageUrl: (book, { size }) => imageUrl(size, book.googleId),
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
    },
    reviews: (book, args, context) => {
      const { loaders } = context;
      const { findReviewsByBookIdsLoader } = loaders;
      return findReviewsByBookIdsLoader.load(book.id);
    }
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
    book: (root, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findBooksByIdsLoader.load(args.id);
    }
  },
};

export default resolvers;
