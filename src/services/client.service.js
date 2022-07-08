const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../helpers");
const { constants } = require("../utils");
const { examRepository } = require("../repositories");
const { promisify } = require("util");

module.exports = {
    getExam: async (clientCPF) => {
        const exam = await examRepository.get({ CPF: clientCPF })

        if(!exam){
            throw{
                status: StatusCodes.notFound,
                message: messages.notFound("exam"),
            };
        }

        return exam
    }
}