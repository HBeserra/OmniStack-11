const colors = require('colors');
const app = require('./app')

const port = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3333

console.log("\nServidor iniciado em: " + colors.blue(`http://localhost:${port}/`))
app.listen(port)
