import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'hackerbook',
});

async function query(sql, params) {
  const client = await pool.connect();
  try {
    return client.query(sql, params);
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
}

export default query;