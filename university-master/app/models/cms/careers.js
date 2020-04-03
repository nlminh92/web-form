'use strict';
module.exports = (sequelize, DataTypes) => {
    const Career = sequelize.define('CareerCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'careers'
    });
    return Career;
};
