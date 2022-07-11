'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Registrations", [
      {
        userId: 4,
        schemeId: 1,
        timeId: [86,87,88,89,90,91],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Registrations", null, {});
  }
};
