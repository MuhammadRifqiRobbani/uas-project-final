/**
 * TODO 5: SETUP MODEL
 */

//import db
const res = require("express/lib/response")
const db = require("../config/database")

// make model Pasiencovid for query database kak 
// make class Model Pasiencovid kak
class  Pasiencovid {

    /**
     * kak aufa ini cara  membuat data untuk menyisipkan data ke database
     */

         static async create(data) {    
            const id = await new Promise((resolve, reject) => {
                const sql = 'INSERT INTO pasiencovid SET ?'
                db.query(sql, data, (err, results) => {
                    resolve(results.insertId);
                })
            })
            const Pasiencovid = await this.find(id)
            return Pasiencovid;
        }

    /**
      * kak aufa ini cara update untuk update data Pasiencovid
      */
     static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE  Pasiencovid SET ? WHERE id = ?"
            db.query(sql, [data, id], (err, results) => {
                resolve(results)
            })
        })
        const  Pasiencovid = await this.find(id)
        return  Pasiencovid;
    }

    /**
      * kak aufa ini cara menemukan untuk mendapatkan data Dari id
      */
     static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM  Pasiencovid WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results[0])
            })
        })
    }

    /**
      * kak aufa ini cara Buat semua metode untuk mendapatkan semua data kak
      */

    static all() {
        return new Promise((resolve, reject) => {
            //query select all
            const sql = "SELECT * FROM pasiencovid"
            db.query(sql, (err, results) => {
                resolve(results)
            })
        })
    }

    /**
      * kak aufa ini cara mencari nama Pasiencovid
      */
     static search(name) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM  Pasiencovid WHERE name LIKE '%${name}%'`
            db.query(sql, name, (err, results) => {
                resolve(results)
            })
        })
    }

    /**
      * kak aufa ini cara mendapatkan status Pasiencovid
      */
    static status(status) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM  Pasiencovid WHERE status LIKE '%${status}%'`
            db.query(sql, status, (err, results) => {
                resolve(results)
            })
        })
    }
     

    /**
      * kak aufa ini cara  menghapus data Pasiencovid
      */
    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM  Pasiencovid WHERE id = ?"
            db.query(sql, id, (err, results) => {
                resolve(results)
            })
        })
    }

}

//export model
module.exports =  Pasiencovid;