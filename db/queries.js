import supabase from './db.js';

async function getCounters (hero) {
   const { rows } = await pool.query("SELECT counters, counter_rating FROM counters WHERE character = $1", [hero]);
   return rows;
}

async function getAllCharacters() {
    const {data: hero, error }= await supabase
        .from('hero')
        .select('*')

    if (error) {
        console.error(error);
        return;
    }

    return hero;
}


export default {
    getCounters,
    getAllCharacters,
}