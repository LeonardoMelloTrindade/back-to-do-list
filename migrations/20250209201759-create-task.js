'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Tasks', {
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
      categoryId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      timePeriod: {
        allowNull: false,
        type: DataTypes.STRING
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
      priority: {
        allowNull: false,
        type: DataTypes.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};