const knex = require('knex')
const configuration = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development // Seleciona o banco de dados de Test ou Produção 

const connection = knex(config)

module.exports = connection