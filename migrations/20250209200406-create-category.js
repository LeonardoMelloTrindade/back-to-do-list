'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryINTEGERerface, DataTypes) {
    await queryINTEGERerface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      groupId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Groups',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING
      },
      allTasks: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      allTasksFinished: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryINTEGERerface, Sequelize) {
    await queryINTEGERerface.dropTable('Categories');
  }
};