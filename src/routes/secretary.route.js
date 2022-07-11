const router = require("express").Router();
const cors = require("cors");
const { SecretaryController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const corsoptions = {
  origin: "*",
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.use(isAuthorized).get("/exam", cors(corsoptions), SecretaryController.getExam);
router.use(isAuthorized).post("/user", cors(corsoptions), SecretaryController.newUser);

module.exports.secretary = router;