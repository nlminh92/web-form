'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const db = {};
const databases = Object.keys(config.databases);

for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    db[database] = new Sequelize( dbPath.database, dbPath.username, dbPath.password, dbPath );
}
// cms
fs
    .readdirSync(__dirname + '/cms')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = db['cms']['import'](path.join(__dirname + '/cms', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
module.exports = db;
