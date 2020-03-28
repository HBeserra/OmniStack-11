const connection = require('../database/connection')
const generateUniqueID = require('../../src/utils/generateUniqueID')

module.exports = {

    async index (req,res) {
        const ongs = await connection('ongs').select('*')

        return res.json({ ongs })
    },
    async create (req,res){
        const { name, email, whatsapp, city, uf } = req.body // a variavel RequestBody recebe o corpo da requisição
        console.log(req.body)

        const id = generateUniqueID()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    }
}