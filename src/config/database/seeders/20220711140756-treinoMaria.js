'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Trainings", [
      {
        resgistraionId: 2,
        exerciseId: 13,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 2,
        exerciseId: 14,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 2,
        exerciseId: 15,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 2,
        exerciseId: 16,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 2,
        exerciseId: 1,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 2,
        exerciseId: 2,
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
