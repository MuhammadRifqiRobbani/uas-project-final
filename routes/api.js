/**
 * TODO 2: SETUP ROUTING (ROUTER)
 */

// import controller Patient
const Pasientcovid = require("../controllers/PasiencovidController")

// import express
const express = require("express")

// membuat object router
const router = express.Router()

// buat routing home
router.get("/", (req, res) => {
    res.send("Semangat UAS Projectnya rifqi  bismillah bisa ")
})




// Routing untuk pasien
router.post("/patients", Pasientcovid.store)
router.put("/patients/:id", Pasientcovid.update)
router.get("/patients/:id", Pasientcovid.show)
router.get("/patients", Pasientcovid.index)
router.get("/patients/search/:name", Pasientcovid.search)
/**
 * router.get("/patients/status/dead", Pasientcovid.status)
 * router.get("/patients/status/recovered", Pasientcovid.status)
 * router.get("/patients/status/negatif", Pasientcovid.status)
 * kak aufa aku beda cara untuk menggantikan 3 controller di atas aku
 * jadikan satu controller aja seperti yang dibawah ini kak,
 * tinggal di tulis aja statusnya ya kak
 */
 
router.get("/patients/status/:status", Pasientcovid.status)
router.delete("/patients/:id", Pasientcovid.destroy)


// export module routing
module.exports = router;