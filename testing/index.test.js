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
})()