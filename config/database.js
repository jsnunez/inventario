const { Sequelize } = require('sequelize');
// configuracion con base de datos de local

// const sequelize = new Sequelize('ferreteriain3', 'root', '12345', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// configuracion con base de datos de railway
const sequelize = new Sequelize('railway', 'root', 'YtLDWMqKeNmrWreijmOiTsnYuORyfPQg', {
  host: 'trolley.proxy.rlwy.net',
  dialect: 'mysql',
  port: 35017,
});

module.exports = sequelize;
