'use strict';
module.exports = (sequelize, DataTypes) => {
    const Partsouq = sequelize.define('partsouq', {
        part_number: DataTypes.STRING,
        shipping_cost: DataTypes.FLOAT,
        results: DataTypes.JSON,
        substitutions: DataTypes.JSON,
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
    Partsouq.associate = function (models) {
        // associations can be defined here
    };
    return Partsouq;
};