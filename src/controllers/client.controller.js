const { StatusCodes } = require("http-status-codes")
const { ClientService } = require("../services")
const yup = require("yup");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../utils");
const { clientValidation } = require("../validations")

module.exports = {
    getExam: async (req, res) => {
        try {  
            const [scheme, token]  = req.headers.authorization.split(" ");

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);

            await clientValidation.isClient(token)

            const response = await ClientService.getExam(logged_user.CPF)
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    }
}