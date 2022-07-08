const router = require("express").Router();
const cors = require("cors");
const { CommonController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const corsoptions = {
  origin: "*",
  methods: ['GET'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.get("/schemes", cors(corsoptions), CommonController.getschemes);
router.post("/login", cors(corsoptions), CommonController.login);
router.use(isAuthorized).get("/user", cors(corsoptions), CommonController.getUser);

module.exports.common = router;