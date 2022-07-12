'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Trainings", [
      {
        registrationId: 3,
        exerciseId: 5,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registrationId: 3,
        exerciseId: 6,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registrationId: 3,
        exerciseId: 7,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registrationId: 3,
        exerciseId: 8,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registrationId: 3,
        exerciseId: 20,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        registrationId: 3,
        exerciseId: 21,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Trainings", null, {});
  }
};
