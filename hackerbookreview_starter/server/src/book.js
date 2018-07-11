import query from './db';

export async function allBooks() { 
  const sql = `
  select * from hb.book;
  `;
  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}