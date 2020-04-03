'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('UserCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        encrypted_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('NOW()'),
        },
        updated_at: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('NOW()'),
        }
    }, {
        tableName: 'users'
    });
    return User;
};
