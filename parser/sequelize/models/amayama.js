'use strict';
module.exports = (sequelize, DataTypes) => {
    const Amayama = sequelize.define('amayama', {
        name: DataTypes.STRING,
        part_number: DataTypes.STRING,
        full_part_number: DataTypes.STRING,
        weight: DataTypes.FLOAT,
        description: DataTypes.STRING,
        catalog: DataTypes.STRING,
        discontinued: DataTypes.BOOLEAN,
        tableData: DataTypes.JSON,
        original_replacements: DataTypes.JSON,
        non_original_replacements: DataTypes.JSON,
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
    Amayama.associate = function (models) {
        // associations can be defined here
    };
    return Amayama;
};