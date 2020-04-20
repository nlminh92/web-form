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
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'sessions'
    });
    return Session;
};

// type
// form1: 1
// form2: 2
// form3: 3