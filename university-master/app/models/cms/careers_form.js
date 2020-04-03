'use strict';
module.exports = (sequelize, DataTypes) => {
    const CareersForm = sequelize.define('CareersFormCms', {
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
        tableName: 'careers_form'
    });
    return CareersForm;
};
