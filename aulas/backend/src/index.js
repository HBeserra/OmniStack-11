const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors({
    //origin: "http://..."
}))

app.use(express.json())
app.use(routes)

app.listen(3333)


/*app.post('/users/:id', (req,res)=>{
    
    const QueryParams = req.query // a variavel QueryParams recebe os parametros enviados na requisicão pelo metodo Query

    console.log(QueryParams)
    
    const RouteParms = req.params // a variavel RouteParams recebe os parametros enviados na requisicão pelo metodo Route

    console.log(RouteParms)

    const RequestBody = req.body // a variavel RequestBody recebe o corpo da requisição

    console.log(RequestBody)

    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'HBeserra'
    })

})*/