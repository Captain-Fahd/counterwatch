import pool from './pool';

async function getCounters (hero) {
   const { rows } = await pool.query("SELECT counters, counter_rating FROM counters WHERE character = $1", [hero]);
   return rows;
}


module.exports = {
    getCounters,
}