'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init({
    date: DataTypes.DATE,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    descriptionImage: DataTypes.TEXT,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};