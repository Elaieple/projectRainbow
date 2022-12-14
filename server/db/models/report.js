'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Income, {foreignKey: 'monthId'})
      this.hasMany(models.HelpVol, {foreignKey: 'monthId'})
      this.hasMany(models.HelpInfo, {foreignKey: 'monthId'})
      this.hasMany(models.Spending, {foreignKey: 'monthId'})
    }
  }
  Report.init({
    year: DataTypes.INTEGER,
    month: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};