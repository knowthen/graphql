import { groupBy, map } from 'ramda';
import DataLoader from 'dataloader';
import query from './db';

export async function findAuthorsByBookIds(ids) {
  const sql = `
  select 
  hb.author.*,
  hb.book_author.book_id
  from hb.author inner join hb.book_author
    on hb.author.id = hb.book_author.author_id
  where hb.book_author.book_id = ANY($1);
  `;
  const params = [ids];
  try {
    const result = await query(sql, params);
    const rowsById = groupBy(author => author.bookId, result.rows);
    return map(id => rowsById[id] , ids);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function findAuthorsByBookIdsLoader() {
  return new DataLoader(findAuthorsByBookIds);
}

export async function authorsByBookId(id) {
  const sql = `
  select 
  hb.author.*
  from hb.author inner join hb.book_author
    on hb.author.id = hb.book_author.author_id
  where hb.book_author.book_id = $1;
  `;
  const params = [id];
  try {
    const result = await query(sql, params);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}