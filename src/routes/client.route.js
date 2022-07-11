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

router.use(isAuthorized)

router.get("/exam", cors(corsoptions), ClientController.getExam);
router.get("/registration", cors(corsoptions), ClientController.getRegistrations);
router.get("/training", cors(corsoptions), ClientController.getTraining);

module.exports.client = router;