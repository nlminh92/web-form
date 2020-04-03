'use strict';
module.exports = (sequelize, DataTypes) => {
    const Province = sequelize.define('ProvinceCms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        typee: DataTypes.STRING,
        code: DataTypes.STRING
    }, {
        tableName: 'provinces'
    });
    
    return Province;
};
