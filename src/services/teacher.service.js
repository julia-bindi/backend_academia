const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../helpers");
const { constants } = require("../utils");
const { exerciseRepository } = require("../repositories");
const { promisify } = require("util");

module.exports = {
    getExercises: async () => {
        const exercises = await exerciseRepository.list()
        
        if(!exercises){
            throw{
                status: StatusCodes.NOT_FOUND,
                message: messages.notFound("exercises"),
            };
        }

        return exercises["rows"]
    }
}