'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Project, {foreignKey: 'projectId'})
    }
  }
  Photo.init({
    projectId: DataTypes.INTEGER,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};