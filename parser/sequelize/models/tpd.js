'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tpd = sequelize.define('tpd', {
    part_number: DataTypes.STRING,
    full_part_number: DataTypes.STRING,
    brand_name: DataTypes.STRING,
    replaced: DataTypes.STRING,
    retail_price: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    discontinued: DataTypes.BOOLEAN,
    relatedParts: DataTypes.JSON,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {});
  Tpd.associate = function (models) {
    // associations can be defined here
  };
  return Tpd;
};