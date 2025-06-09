import supabase from './db.js';

async function getCounters (target) {
	const { data:hero, error } = await supabase
	    .from('counters')
	    .select(`
	    counters,
	    hero!fk_counter (
	        role
	    )`
	    )
	    .eq('character', `${target}`);
    console.log('Query successful:\n');

    if (error) {
        console.error(error);
        return;
    }
    return hero;
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

console.log(getAllCharacters());

export default {
    getCounters,
    getAllCharacters,
}
