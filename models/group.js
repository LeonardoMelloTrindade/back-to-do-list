'use strict';

category

const {
  Model
} = require('sequelize');
const Category = require('./category');
const Task = require('./task');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    allTasks: DataTypes.INTEGER,
    allTasksFinished: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group',
  });

  Group.hasMany(Category, { foreignKey: 'groupId', as: 'categories' });
  Group.hasMany(Task, { foreignKey: 'groupId', as: 'tasks' });

  return Group;
};