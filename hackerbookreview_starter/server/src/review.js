import query from './db';

const ORDER_BY = {
  ID: 'id',
  ID_DESC: 'id desc',
};

export async function allReviews(args) {
  const orderBy = ORDER_BY[args.orderBy];
  const sql = `
  select * from hb.review
  order by ${orderBy};
  `;
  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
