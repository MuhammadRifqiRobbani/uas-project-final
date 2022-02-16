/**
 * TODO 3: SETUP CONFIG DATABASE
 */

//Import mysql
const mysql = require("mysql")

// import dotenv dan config
const dotenv = require("dotenv").config()

// connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

/**
 * kak aufa ini nyambung ke database 
 * setelah terkoneksi ke databse setelahnya Menerima parameter callback
 */
db.connect(function (err) {
    if (err) {
        console.log(`koneksi anda gagal: ${err}`);
        return;
    } else {
        console.log("koneksi telah berhasil");
        return;
    }
});

// export db
module.exports = db;