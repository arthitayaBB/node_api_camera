const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apinodedb_r3bg', 'nodeapi', '4dhU8bUZ20cPzyrJq8dzPZHxYpRBqBl5', {
host: 'dpg-cs4evcd2ng1s739jbfpg-a',
dialect: 'postgres',
});

module.exports = sequelize;