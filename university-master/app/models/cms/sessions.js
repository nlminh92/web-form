'use strict';
module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('SessionCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        from_time: {
            type: DataTypes.DATE(3),
            allowNull: false
        },
        to_time: {
            type: DataTypes.DATE(3),
            allowNull: false
        }
    }, {
        tableName: 'sessions'
    });
    return Session;
};
