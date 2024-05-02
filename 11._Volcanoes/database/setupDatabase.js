import db from './connection.js';

const isDeleteMode = process.argv.includes('delete');
console.log(isDeleteMode ? 'Database created' : 'Database updated')

if(isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes;`)
    await db.run(`DROP TABLE IF EXISTS villages;`)
}

// ASSIGNMENT: Create volacnoes table, define the SQL below (DDL)
await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL, 
    is_active BOOLEAN,
    type TEXT CHECK(type IN ('Caldera', 'Underwater', 'Underground', 'Super Volcanoe'))
)`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcano_id INTEGER,
    FOREIGN KEY (volcano_id) REFERENCES villages (id)
)`);

// DML
// Seeding

// ASSIGNMENT: Create some rows in volcanoes and villages
if(isDeleteMode) {
    db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Mount St. Helenes', TRUE, 'Caldera')`);
    db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Krakatoa', FALSE, 'Super Volcanoe')`);
    db.run(`INSERT INTO villages (name, volcano_id) VALUES ('First Village', 1)`);
    db.run(`INSERT INTO villages (name, volcano_id) VALUES ('Second Village', 2)`);
}