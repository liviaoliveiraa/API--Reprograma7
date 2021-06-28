const express = require("express")
const app = express()
const cidades = require("./data/estados-cidades.json")

app.get("/", (request, response) =>{
    console.log('Teste')
    response.status(200).json("Salve!")
})

app.get("/estados/todos", (request, response) => {
    response.status(200).send(cidades)
})

app.get("/estados/:sigla", (request, response) => {
    const nomeRequisitado = request.params.sigla
    console.log(nomeRequisitado)
    response.status(200).send(cidades.find(estado => estado.sigla == nomeRequisitado))
})  


app.listen(3030, () =>{
    console.log('Meu primeiro terminal, ok')
})