'use strict';
module.exports = (sequelize, DataTypes) => {
    const Ward = sequelize.define('WardCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        typee: DataTypes.STRING,
        district_id: DataTypes.BIGINT
    }, {
        tableName: 'wards'
    });
    return Ward;
};
