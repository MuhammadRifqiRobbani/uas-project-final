/**
 * TODO 4: SETUP CONTROLLER
 */

// model impor Pasientcovid
const covid = require("../models/Covid")

//membuat controller Pasientcovid
class PasientcovidController {

    /**
      * kak aufa ini cara penyimpanan untuk menambahkan data
      */
    async store(req, res) {
        const { name, phone, address, status } = req.body
        if (!name || !phone || !address || !status) {
            const data = {
                message: "All fields must be filled correctly"
            };
            return res.status(422).json(data)
        }

        else if (isNaN(phone)) {
            const data = {
                message: "Phone must be number"
            }
            return res.status(422).json(data)
        }
        const Pasientcovid = await covid.create(req.body)
        const data = {
            message: "Resource is added successfully",
            data: Pasientcovid,
        }
        return res.status(201).json(data)
    }

    /**
      * kak aufa ini cara memperbarui data dengan id
      */
    async update(req, res) {
        const { id } = req.params;
        const Pasientcovid = await covid.find(id)
        if (Pasientcovid) {
            const { name, phone, address, status } = req.body
            if (!name || !phone || !address || !status) {
                const data = {
                    message: "All fields must be filled correctly !!"
                };
                return res.status(422).json(data)
            }
            else if (isNaN(phone)) {
                const data = {
                    message: "Phone must be number"
                }
                return res.status(422).json(data)
            }
            const PasientcovidUpdated = await covid.update(id, req.body)
            const data = {
                message: "Resource is update successfully",
                data: PasientcovidUpdated,
            }
            return res.status(200).json(data)
        }
        const data = {
            message: "data Pasientcovid gagal"
        }
        return res.status(404).json(data)
    }

    /**
       *  kak aufa ini cara menunjukkan untuk ngasih tau data Pasientcovid
       */
    async show(req, res) {
        const { id } = req.params;
        const Pasientcovid = await covid.find(id)
        if (Pasientcovid) {
            const data = {
                message: `Get Detail resource`,
                data: Pasientcovid,
            }
            return res.status(200).json(data)
        }
        const data = {
            message: "data Pasientcovid gagal"
        }
        return res.status(404).json(data)
    }

    /**
      * kak aufa ini cara indeks  untuk data indeks Pasientcovid
      */
    async index(req, res) {
        const Pasientcovid = await covid.all()
        if (Pasientcovid.length > 0) {
            const data = {
                message: "Get All Resource | SHOW ALL RESOURCE",
                data: Pasientcovid
            }
            return res.status(200).json(data);
        }
        const data = {
            message: "Data is empty!!!!"
        }
        return res.status(200).json(data)
    }

    /**
       *  kak aufa ini cara pencarian nama pencarian Pasientcovid
       */
    async search(req, res) {
        const { name } = req.params;
        const Pasientcovid = await covid.search(name)
        if (Pasientcovid) {
            const data = {
                message: `Get ${name} resource`,
                data: Pasientcovid,
            }
            return res.status(200).json(data)
        }
        const data = {
            message: "data Pasientcovid gagal"
        }
        return res.status(404).json(data)
    }

    /** 
     **
     *  kak aufa ini cara pencarian status Pasien Covid  seperti meninggal,sembuh,positif,negatif,dan lain sebagainya* 
     */
    async status(req, res) {
        const { status } = req.params;
        const Pasientcovid = await covid.status(status)
        if (Pasientcovid) {
            const data = {
                message: `Get ${status} resource`,
                data: Pasientcovid
            }
            return res.status(200).json(data)
        }
        const data = {
            message: "data Pasientcovid gagal"
        }
        return res.status(404).json(data)
    }

    /**
        * kak aufa ini cara penghancuran untuk menghapus data
        */
    async destroy(req, res) {
        const { id } = req.params
        const Pasientcovid = await covid.find(id)
        if (Pasientcovid) {
            await covid.delete(id)
            const data = {
                message: `Pasientcovid no ${id} has deleted`
            }
            return res.status(200).json(data)
        }
        const data = {
            message: "Pasientcovid gagal"
        }
        return res.status(404).json(data)
    }

}

//membuat object controller
const object = new PasientcovidController;

//export controller
module.exports = object;
