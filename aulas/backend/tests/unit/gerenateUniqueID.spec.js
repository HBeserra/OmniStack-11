const generateUniqueID = require('../../src/utils/generateUniqueID')

describe('Generate Unique ID', () => {
    it('shoud generate an unique ID',() => {
        const id = generateUniqueID()

        expect(id).toHaveLength(8)
    })
})