const router = require("express").Router();
const cors = require("cors");
const { DoctorController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const corsoptions = {
  origin: "*",
  methods: ['GET'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.use(isAuthorized).post("/", cors(corsoptions), DoctorController.getschemes);
module.exports.doctor = router;