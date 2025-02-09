'use strict';
const {
  Model
} = require('sequelize');
const Group = require('./group');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    id: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    allTasks: DataTypes.INTEGER,
    allTasksFinished: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });

  Category.belongsTo(Group, { foreignKey: 'groupId', as: 'group' });
  Category.hasMany(Task, { foreignKey: 'categoryId', as: 'tasks' });

  return Category;
};