const { hello } = require("./hello.route")
const { common } = require("./common.route")
const { doctor } = require("./doctor.route")
const { client } = require("./client.route")
const { teacher } = require("./teacher.route")

module.exports = {
    hello,
    common,
    doctor,
    client,
    teacher,
}