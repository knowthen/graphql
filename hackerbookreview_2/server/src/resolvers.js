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
      // findBookById(review.bookId)
    }
  }, 
  Query: {
    books: () => {
      return allBooks();
    },
    reviews: () => allReviews(),
  },
};

export default resolvers;