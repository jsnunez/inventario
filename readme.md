# API y pagina para el control de Inventario para una ferreteria - Node.js, Express, MySQL

[pagina principal](https://inventario-production-fa75.up.railway.app/)

Este es un proyecto de una API RESTful para gestionar productos, desarrollada con **Node.js**, **Express.js** y **MySQL**. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos. Esta API proporciona los siguientes endpoints:

- `GET` para obtener productos  `https://inventario-production-fa75.up.railway.app/api/productos`
- `POST` para crear un nuevo producto `https://inventario-production-fa75.up.railway.app/api/productos`
- `PUT` para actualizar un producto existente `https://inventario-production-fa75.up.railway.app/api/productos/${id}`
- `DELETE` para eliminar un producto `https://inventario-production-fa75.up.railway.app/api/productos/${id}`

nota: {id} se debe cambiar por el numero del producto


## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework para Node.js que facilita la creación de aplicaciones web y APIs.
- **MySQL**: Sistema de gestión de bases de datos relacional para almacenar los datos.
- **Insomnia** (opcional): Herramienta para probar las peticiones de la API.

## Instalación

### Requisitos previos

- Tener **Node.js** y **npm** instalados en tu sistema.
- Tener un servidor de base de datos **MySQL** en funcionamiento.

en el archivo database.js se puede modificar para crear una base de datos local
  
Si no tienes Node.js y npm instalados, puedes descargarlos desde [aquí](https://nodejs.org).

### Pasos de instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jsnunez/api-productos.git
   cd api-productos
