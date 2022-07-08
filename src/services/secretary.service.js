const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../helpers");
const { constants } = require("../utils");
const { examRepository } = require("../repositories");
const { promisify } = require("util");

module.exports = {
    getExam: async (CPF) => {
        const exam = await examRepository.get({ CPF })
        console.log("Exame pego do banco")
        console.log(exam)
        
        if(!exam){
            throw{
                status: StatusCodes.NOT_FOUND,
                message: messages.notFound("exam"),
            };
        }

        return exam
    }
}