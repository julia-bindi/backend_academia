'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Registrations", [
      {
        userId: 1,
        schemeId: 1,
        timeId: [1,3,5,12,13,91],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Registrations", null, {});
  }
};
