const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../helpers");
const { constants } = require("../utils");
const { examRepository } = require("../repositories");
const { promisify } = require("util");

module.exports = {
    newExam: async (CPF, weight, height, pressure, fat, leanMass, IMC, able) => {
        const exam = await examRepository.get({ CPF })
        console.log("Exame pego do banco")
        

        newExam = {
            CPF,
            weight,
            height,
            pressure,
            fat,
            leanMass,
            IMC,
            able,
            created_at: new Date(),
            updated_at: new Date(),
        }

        return await examRepository.create(newExam)
    }
}