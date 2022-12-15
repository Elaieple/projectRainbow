'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Project,{ foreignKey: 'projectId'}) 
    }
  }
  NewsProject.init({
    projectId: DataTypes.INTEGER,
    new: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NewsProject',
  });
  return NewsProject;
};