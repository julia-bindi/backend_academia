'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Exercises", [
      {
        groupMuscle: "chest",
        exercise: "Supino inclinado",
        url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Exercises", null, {});
  }
};