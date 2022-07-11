'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Trainings", [
      {
        resgistraionId: 4,
        exerciseId: 2,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 4,
        exerciseId: 12,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 4,
        exerciseId: 22,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 4,
        exerciseId: 3,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 4,
        exerciseId: 13,
        repetitions: 30,
        card: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        resgistraionId: 4,
        exerciseId: 4,
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
