const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('producto', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  codigo_barras: { type: DataTypes.DOUBLE, allowNull: false },
  referencia: { type: DataTypes.STRING, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  precio_costo: { type: DataTypes.FLOAT, allowNull: false },
  precio_venta_detal: { type: DataTypes.FLOAT, allowNull: false },
  cantidad: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'producto', 
  timestamps: true        
});

module.exports = Producto;
