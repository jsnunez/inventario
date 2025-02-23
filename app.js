
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors({
  origin: '*', // Permite todas las conexiones
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/api', productoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
  });
}).catch(err => console.error('Error al sincronizar la base de datos:', err));
