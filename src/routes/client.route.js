const router = require("express").Router();
const cors = require("cors");
const { ClientController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const corsoptions = {
    origin: "*",
    methods: ['GET'],
    allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
    optionsSuccessStatus: 200
}

router.use(isAuthorized).get("/exam", cors(corsoptions), ClientController.getExam);

module.exports.client = router;