'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
      const timePeriod = new Date();
      await queryInterface.bulkInsert('Tasks', [
        {
          name: 'Fazer exercício',
          groupId: null,
          categoryId: null,
          description: 'Pesquisar e encontrar (Gepeto) para fazer',
          timePeriod: timePeriod.setHours(timePeriod.getHours() + 1),
          status: 'Em progresso',
          priority: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Estudar',
          groupId: 1,
          categoryId: 2,
          description: 'Estudar física quântica',
          timePeriod: timePeriod.setHours(timePeriod.getHours() + 6),
          status: 'A fazer',
          priority: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Fazer aquele treino',
          groupId: 3,
          categoryId: null,
          description: 'Aquele treno maroto',
          timePeriod: timePeriod.setHours(timePeriod.getHours() + 2),
          status: 'Finalizado',
          priority: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
