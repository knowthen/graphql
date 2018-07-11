import { allBooks } from './book';

const resolvers = {
  Book: {
    
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;