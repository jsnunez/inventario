const express = require('express');
const { crearProducto, obtenerProductos, actualizarProducto,eliminarProducto} = require('../controllers/productoController');
const router = express.Router();


router.post('/productos', crearProducto);
router.get('/productos', obtenerProductos);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);
module.exports = router;
