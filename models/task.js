'use strict';
const {
  Model
} = require('sequelize');
const Group = require('./group');
const Category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    timePeriod: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });

  Task.belongsTo(Group, { foreignKey: 'groupId', as: 'group' });
  Task.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

  return Task;
};