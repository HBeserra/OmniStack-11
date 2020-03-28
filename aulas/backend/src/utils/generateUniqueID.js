const crypto = require('crypto')

module.exports = function gerenateUniqueID() {
    return crypto.randomBytes(4).toString('HEX')   
}