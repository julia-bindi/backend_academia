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

router.options("/user", cors(corsoptions), async (req, res) =>{ return res.status(StatusCodes.OK)})

router.use(isAuthorized)

router.get("/exam", cors(corsoptions), SecretaryController.getExam);
router.post("/user", cors(corsoptions), SecretaryController.newUser);

module.exports.secretary = router;