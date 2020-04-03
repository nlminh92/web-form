'use strict';
module.exports = (sequelize, DataTypes) => {
    const Combination = sequelize.define('CombinationCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'combination'
    });
    return Combination;
};
