const { StatusCodes } = require("http-status-codes")
const { CommonService } = require("../services")

module.exports = {
    getschemes: async (req, res) => {
        try {
            const response = await CommonService.gelSchemes()
            return res.status(StatusCodes.OK).json(response);
        } catch (error) {
            console.log(error);
            return res
                .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(error.messages);
        }
    }
}