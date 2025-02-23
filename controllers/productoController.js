const Producto = require('../models/producto');
// Crear nuevo producto
const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Obtener lista de productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Actualizar producto
const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const [updated] = await Producto.update(req.body, { where: { id: id } });
    console.log(updated);

    if (updated) {
      const productoActualizado = await Producto.findByPk(id);
      res.json(productoActualizado);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Eliminar producto
const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Producto.destroy({ where: { id } });

    if (deleted) {
      res.json({ mensaje: 'Producto eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { crearProducto, obtenerProductos, eliminarProducto,actualizarProducto};
