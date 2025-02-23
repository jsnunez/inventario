const apiUrl = 'https://inventario-production-fa75.up.railway.app/api/productos';

let productos = []; // Almacenar los productos
let productosFiltrados = []; // Almacenar los productos filtrados
let productosPorPagina = 10; // Número de productos por página inicial
let paginaActual = 1; // Página inicial
const addProductModal = document.getElementById('addProductModal');
 const openAddModalBtn = document.getElementById('openAddModalBtn');
 const closeAddModal = document.getElementById('closeAddModal');

 openAddModalBtn.onclick = () => addProductModal.style.display = 'block';
 closeAddModal.onclick = () => addProductModal.style.display = 'none';
 window.onclick = (e) => { if (e.target === addProductModal) addProductModal.style.display = 'none'; };

// Función para obtener los productos de la API
async function getProductos() {
try {
 const response = await fetch(apiUrl);
 const data = await response.json();
 productos = data; // Almacenar los productos obtenidos
 productosFiltrados = productos; // Inicialmente, los productos filtrados son todos los productos
 mostrarProductos(); // Mostrar productos después de obtenerlos
} catch (error) {
 console.error('Error al obtener los productos:', error);
}
}

// Función para mostrar los productos en la tabla
function mostrarProductos() {
const productosTable = document.getElementById('productosTable').getElementsByTagName('tbody')[0];
productosTable.innerHTML = ''; // Limpiar la tabla

// Calcular los índices de los productos que deben mostrarse en la página actual
const inicio = (paginaActual - 1) * productosPorPagina;
const fin = inicio + productosPorPagina;
const productosPagina = productosFiltrados.slice(inicio, fin);

// Agregar los productos filtrados a la tabla
productosPagina.forEach(producto => {
 const row = productosTable.insertRow();
 row.innerHTML = `
                 <td>${producto.codigo_barras}</td>
     <td>${producto.nombre}</td>
     <td>${producto.cantidad} unid</td>
     <td>$${producto.precio_costo}</td>           
     <td>$${producto.precio_venta_detal}</td>

     <td id="opcionboton">
     <button onclick='editarProducto(${JSON.stringify(producto)})'>Editar</button>
     <button onclick='eliminarProducto(${producto.id})'>Eliminar</button>
   </td>
 `;
});

// Actualizar el número de página
document.getElementById('pageNumber').textContent = `Página ${paginaActual}`;

// Habilitar/deshabilitar los botones de paginación
document.getElementById('prevPage').disabled = paginaActual === 1;
document.getElementById('nextPage').disabled = paginaActual * productosPorPagina >= productosFiltrados.length;
}

// Función para manejar el botón "Anterior"
document.getElementById('prevPage').onclick = function () {
if (paginaActual > 1) {
 paginaActual--;
 mostrarProductos();
};}

// Función para manejar el botón "Siguiente"
document.getElementById('nextPage').onclick = function () {
if (paginaActual * productosPorPagina < productosFiltrados.length) {
 paginaActual++;
 mostrarProductos();
}
};

// Filtrar productos en tiempo real a medida que el usuario escribe
document.getElementById("filterNombre").addEventListener("input", filtrarProductos);
document.getElementById("filterReferencia").addEventListener("input", filtrarProductos);
document.getElementById("filterCodigoBarras").addEventListener("input", filtrarProductos);

// Función que se ejecuta al escribir en los filtros
function filtrarProductos() {
const nombreFilter = document.getElementById("filterNombre").value.toLowerCase();
const referenciaFilter = document.getElementById("filterReferencia").value.toLowerCase();
const codigoBarrasFilter = document.getElementById("filterCodigoBarras").value.toLowerCase();

// Filtrar productos solo si hay un valor en el filtro
productosFiltrados = productos.filter(producto => {
 const matchNombre = nombreFilter ? producto.nombre.toLowerCase().includes(nombreFilter) : true;
 const matchReferencia = referenciaFilter ? producto.referencia.toLowerCase().includes(referenciaFilter) : true;
 const matchCodigoBarras = codigoBarrasFilter ? producto.codigo_barras.toString().includes(codigoBarrasFilter) : true;

 return matchNombre && matchReferencia && matchCodigoBarras;
});

// Reiniciar a la primera página después de aplicar los filtros
paginaActual = 1;

// Mostrar los productos filtrados
mostrarProductos();
}



// Filtrar productos al cambiar los filtros
document.getElementById("filterForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evitar el envío del formulario
paginaActual = 1; // Resetear la página a la primera página
mostrarProductos(); // Mostrar los productos con los filtros aplicados
});

// Función para agregar un nuevo artículo
document.getElementById("nuevoArticuloForm").addEventListener('submit', async function (event) {
event.preventDefault(); // Prevenir el envío del formulario

const nombre = document.getElementById("nombre").value;
const codigo_barras = document.getElementById("codigoBarras").value;
const referencia = document.getElementById("referencia").value;
const cantidad = document.getElementById("cantidad").value;
const precio_costo = document.getElementById("precioCosto").value;
const precio_venta_detal = document.getElementById("precioVentaDetal").value;
const nuevoArticulo = {
 nombre,
 codigo_barras,
 referencia,
 cantidad,
 precio_costo,
 precio_venta_detal
};

try {
 const response = await fetch(apiUrl, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(nuevoArticulo)
 });

 if (response.ok) {
     alert('Artículo agregado con éxito');
     location.reload(); // Recargar la página después de agregar el artículo
 } else {
     alert('Error al agregar el artículo');
 }
} catch (error) {
 console.error('Error al agregar el artículo:', error);
}
});
const eliminarProducto = async (id) => {
if (confirm('¿Seguro que deseas eliminar este producto?')) {
 await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
 
 location.reload(); // Recargar la página después de eliminar
 
}


};

const editProductModal = document.getElementById('editProductModal');
const closeEditModal = document.getElementById('closeEditModal');

closeEditModal.onclick = () => editProductModal.style.display = 'none';
window.onclick = (e) => { if (e.target === editProductModal) editProductModal.style.display = 'none'; };

// Función para abrir el modal de edición y rellenar campos
function editarProducto(producto) {
document.getElementById('editId').value = producto.id;
document.getElementById('editNombre').value = producto.nombre;
document.getElementById('editCodigoBarras').value = producto.codigo_barras;
document.getElementById('editReferencia').value = producto.referencia;
document.getElementById('editCantidad').value = producto.cantidad;
document.getElementById('editPrecioCosto').value = producto.precio_costo;
document.getElementById('editPrecioVentaDetal').value = producto.precio_venta_detal;

editProductModal.style.display = 'block';
}

// Manejar envío del formulario de edición
document.getElementById('editarArticuloForm').addEventListener('submit', async function(event) {
event.preventDefault();

const id = document.getElementById('editId').value;
const productoEditado = {
 nombre: document.getElementById('editNombre').value,
 codigo_barras: document.getElementById('editCodigoBarras').value,
 referencia: document.getElementById('editReferencia').value,
 cantidad: document.getElementById('editCantidad').value,
 precio_costo: document.getElementById('editPrecioCosto').value,
 precio_venta_detal: document.getElementById('editPrecioVentaDetal').value
};

try {
 const response = await fetch(`${apiUrl}/${id}`, {
     method: 'PUT',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(productoEditado)
 });

 if (response.ok) {
     alert('Producto actualizado con éxito');
     editProductModal.style.display = 'none';
     getProductos();
 } else {
     alert('Error al actualizar el producto');
 }
} catch (error) {
 console.error('Error al actualizar:', error);
}
});
// Llamar a la función para obtener los productos cuando se carga la página
window.onload = getProductos;
