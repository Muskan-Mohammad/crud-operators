const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(
"./data.db",
sqlite3.OPEN_READWRITE,
(error) => {
    if(error){
        console.log("Error in the Database")
        console.error(error);
    } else {
        console.log("Database got connected successfully!!!")
    }
}

);
module.exports = db;