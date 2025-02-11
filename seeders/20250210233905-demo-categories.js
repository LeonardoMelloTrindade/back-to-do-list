'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Categories', [
        {
          name: 'Matemática',
          groupId: 3,
          image: null,
          allTasks: 5,
          allTasksFinished: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Relatórios',
          groupId: 1,
          image: null,
          allTasks: 10,
          allTasksFinished: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'História',
          groupId: 3,
          image: null,
          allTasks: 10,
          allTasksFinished: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
