const File = require("./src/file")
const { error } = require("./src/constants")
const assert = require('assert')

;(async () => {
    // variaveis criadas nesse bloco, so existem durante essa execucao
    {
        const filePath = './mock/emptyFile-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }

    {
        const filePath = './mock/emptyFile-invalidHeader.csv'
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }

    {
        const filePath = './mock/fiveItems-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }

    {
        const filePath = './mock/threeItems-valid.csv'
        const expected = [
            {
                id: 1,
                name: "durval",
                profession: "developer",
                age: 34
            },
            {
                id: 2,
                name: "elano",
                profession: "manager",
                age: 30
            },
            {
                id: 3,
                name: "jose",
                profession: "QA",
                age: 25
            }
        ]
        const result = await File.csvToJSON(filePath)
        assert.deepEqual(result, expected)
    }
})()