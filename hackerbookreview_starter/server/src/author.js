import query from './db';

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