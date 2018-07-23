import { findAuthorsByBookIdsLoader } from './author';
import { findBooksByIdsLoader } from './book';
import { findUsersByIdsLoader } from './user';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findBooksByIdsLoader: findBooksByIdsLoader(),
  findUsersByIdsLoader: findUsersByIdsLoader(),
});