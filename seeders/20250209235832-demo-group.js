'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Groups', [
      {
        name: 'Faculdade',
        image: null,
        allTasks: 5,
        allTasksFinished: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Trabalho',
        image: null,
        allTasks: 8,
        allTasksFinished: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Academia',
        image: null,
        allTasks: 4,
        allTasksFinished: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Groups', null, {});
  }
};
