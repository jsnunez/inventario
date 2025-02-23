const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('ferreteriain3', 'root', '12345', {
//   host: 'localhost',
//   dialect: 'mysql',
// });
const sequelize = new Sequelize('railway', 'root', 'YtLDWMqKeNmrWreijmOiTsnYuORyfPQg', {
  host: 'trolley.proxy.rlwy.net',
  dialect: 'mysql',
  port: 35017,
});

module.exports = sequelize;
