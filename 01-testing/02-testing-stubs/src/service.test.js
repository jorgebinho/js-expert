const Service = require("./service");
const assert = require('assert');
const { createSandbox } = require('sinon');

const sinon = createSandbox();
const mocks = {
    alderaan: require('../mocks/alderaan.json'),
    tatooine: require('../mocks/tatooine.json'),
};

const BASES_URL = {
    1: "https://swapi.dev/api/planets/1/",
    2: "https://swapi.dev/api/planets/2/",
};

; (async () => {
    const service = new Service()

    const stub = sinon.stub(
        service,
        service.makeRequest.name
    )

    stub.withArgs(BASES_URL[1]).resolves(mocks.tatooine)
    stub.withArgs(BASES_URL[2]).resolves(mocks.alderaan)

    {
        const expected = {
            name: "Tatooine",
            surfaceWater: "1",
            appearedIn: 5,
        }

        const results = await service.getPlanets(BASES_URL[1])
        assert.deepStrictEqual(results, expected)
    }

    {
        const expected = {
            name: "Alderaan",
            surfaceWater: "40",
            appearedIn: 2,
        }

        const results = await service.getPlanets(BASES_URL[2])
        assert.deepStrictEqual(results, expected)
    }
})()