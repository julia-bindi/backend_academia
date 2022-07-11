'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Registrations", [
      {
        userId: 3,
        schemeId: 10,
        timeId: [55,57,59,66,68],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Registrations", null, {});
  }
};
