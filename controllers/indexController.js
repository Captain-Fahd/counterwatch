import db from '../db/queries.js';
const title = 'Counterwatch';

//CRUD function
async function getCounters(req, res) {
    const counters = await db.getCounters(req.params.name);
    console.log(counters);
    res.render('counters', {counters: counters})
}

module.exports = {
    getCounters,
}