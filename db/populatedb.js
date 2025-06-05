const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS hero (
    name VARCHAR(225) NOT NULL PRIMARY KEY,
    role VARCHAR(225) NOT NULL
);
CREATE TABLE IF NOT EXISTS roles (
    role VARCHAR(225) NOT NULL
);

CREATE TABLE IF NOT EXISTS counters (
    character VARCHAR(225) NOT NULL,
    counters VARCHAR(225) NOT NULL,
    PRIMARY KEY (character, counters),
    CONSTRAINT fk_character
        FOREIGN KEY (character)
            REFERENCES hero(name),
    CONSTRAINT fk_counter
        FOREIGN KEY (counter)
            REFERENCES hero (name)
);`

async function main() {
    console.log('seeding...');
    console.log('Database URL: ' + process.env.DATABASE_URL ? "Found" : "Not Found");

    if (!process.env.DATABASE_URL) {
        console.log('No database URL set.');
        process.exit(1);
    }

    try {
        console.log('Attempting to connect to the database.');
        const client = new Client({
            user: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            database: process.env.DBNAME,
            port: process.env.PORT,
            connectionString: process.env.DATABASE_URL,
        });
        await client.connect();
        console.log('Connected to the database.');
        await client.query(SQL);
        await client.end();
        console.log('Query successfully completed.');
    } catch (error) {
        console.error("Database error: " + error.message);
        console.error("Error code:" + error.code);
        console.error("Full error: " + error);
        process.exit(1);
    }
}

main().catch((err) => {
    console.error("Script error: " + err);
    process.exit(1);
})