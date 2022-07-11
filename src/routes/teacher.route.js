const router = require("express").Router();
const cors = require("cors");
const { TeacherController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

const corsoptions = {
  origin: "*",
  methods: ['GET'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.use(isAuthorized)

router.get("/exercises", cors(corsoptions), TeacherController.getExercises);

module.exports.teacher = router;