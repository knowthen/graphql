import query from './db';

export async function allReviews() {
  const sql = `
  select * from hb.review;
  `;
  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}