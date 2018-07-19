import { findAuthorsByBookIdsLoader } from './author';
import { findBooksByIdsLoader } from './book';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findBooksByIdsLoader: findBooksByIdsLoader(),
});