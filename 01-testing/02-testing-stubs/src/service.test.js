const Service = require('./service')
const assert = require('assert')

const BASES_URL = {
    1: "https://swapi.dev/api/planets/1",
    2: "https://swapi.dev/api/planets/2"
}

;(async () => {
    {
        console.log('bateu aqui')
        const service = new Service()
        const dados = await service.makeRequest(BASES_URL[1])
        console.table({ dados })
    }
})