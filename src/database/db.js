const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
/*    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT

        );
    `)

    const query = `INSERT INTO places (image, name, address, address2, state, city, items) 
    VALUES (?,?,?,?,?,?,?);`
    const values = [
    "",
    "",
    "Guilherme Gambolla, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Residuos Eletronicos" 
    ]

    function afterInsertData (err) {
        if(err){
            return console.log(err)
        }
        console.log("cadastrado com sucesso")
        console.log(this)

    }

    //db.run(query, values, afterInsertData)

    db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
        if(err){
            return console.log(err)
        }
        console.log("Registro Deletado")
    })
  */




