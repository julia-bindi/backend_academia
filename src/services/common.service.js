const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../helpers");
const { constants } = require("../utils");
const { schemeRepository } = require("../repositories");
const { promisify } = require("util");

module.exports = {
    gelSchemes: async () => {
        const schemes = await schemeRepository.getAll()

        return schemes
    }
}