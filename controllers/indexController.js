import db from '../db/queries.js';
const title = 'Counterwatch';

//CRUD function
async function getCounters(req, res) {
	const  counters  = await db.getCounters(req.params.name);
    console.log('Counters from database:', counters);
    res.render('counters', {counterList: counters});
}

async function getAllCharacters(req, res) {
    const heroes = await db.getAllCharacters();
        console.log('Characters from database:', heroes);
        console.log('Number of heroes:', heroes ? heroes.length : 'undefined');
        res.render('index', {heroes: heroes});
}
export default {
    getCounters,
    getAllCharacters,
}
