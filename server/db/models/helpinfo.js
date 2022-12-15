'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HelpInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Report,{ foreignKey: 'monthId'})
    }
  }
  HelpInfo.init({
    monthId: DataTypes.INTEGER,
    texthlp: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'HelpInfo',
  });
  return HelpInfo;
};