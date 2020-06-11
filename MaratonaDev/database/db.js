const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("./database/database.db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS donors(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            blood TEXT
        );
    `);

    /*db.run(`INSERT INTO donors(
        name,
        email,
        blood
    ) VALUES(
        'Samuel',
        'samuellimafdsfsd',
        'O+'
    );`, function(err) {
        if (err) {
            console.log(err);
        }
    });*/

    /*db.run(`DELETE FROM donors`, function(err) {
        if (err) {
            console.log("deu erro");
        }

        console.log("Apagou tudo");
    })*/
    /*
    db.all(`SELECT * FROM donors`, function(err, rows) {
        if (err) {
            console.log(err);
        }
        console.log("Registros: ");
        console.log(rows);
    });*/
})

module.exports = db;