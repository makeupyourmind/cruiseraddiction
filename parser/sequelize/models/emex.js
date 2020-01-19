'use strict';
module.exports = (sequelize, DataTypes) => {
    const Emex = sequelize.define('emex', {
        part_number: DataTypes.STRING,
        brand_name: DataTypes.STRING,
        chain: DataTypes.JSON,
        analogues: DataTypes.JSON,
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
    Emex.associate = function (models) {
        // associations can be defined here
    };
    return Emex;
};