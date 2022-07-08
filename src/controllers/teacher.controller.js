const { StatusCodes } = require("http-status-codes")
const { TeacherService } = require("../services")
const yup = require("yup");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { constants } = require("../utils");
const { teacherValidation } = require("../validations")

module.exports = {
    getExercises: async (req, res) => {
        try {  
            const [scheme, token]  = req.headers.authorization.split(" ");

            const verify = promisify(jwt.verify);
            const logged_user = await verify(token, constants.jwtToken);

            await teacherValidation.isTeacher(token)

            const response = await TeacherService.getExercises()
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    }
}