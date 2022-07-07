const { StatusCodes } = require("http-status-codes")
const { CommonService } = require("../services")
const yup = require("yup");

module.exports = {
    getschemes: async (req, res) => {
        try {
            const response = await CommonService.getSchemes()
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    },

    login: async (req, res) => {
        try {
            const schema = yup.object().shape({
                CPF: yup.string().required(),
                password: yup.string().required(),
                type: yup.string().required(),
            });
        
            await schema.validate(req.body, {
                stripUnknown: true,
            });

            const { CPF, password, type } = req.body;

            const response = await CommonService.login(CPF, password, type)
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    }
}