'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Registrations", [
      {
        userId: 2,
        schemeId: 7,
        timeId: [26,27,28,29,30,91],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Registrations", null, {});
  }
};
