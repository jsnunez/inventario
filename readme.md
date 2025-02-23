# API de Inventario para una Ferretería - Node.js, Express, MySQL

Este es un proyecto de una API RESTful para gestionar productos en una ferretería, desarrollada con **Node.js**, **Express.js** y **MySQL**. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos. Además, se incluye una interfaz de usuario que utiliza **HTML**, **CSS** y **JavaScript** para interactuar con la API.

[Pagina de inicio](https://inventario-production-fa75.up.railway.app/)

## Tecnologías utilizadas

### Backend

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework para Node.js que facilita la creación de aplicaciones web y APIs.
- **MySQL**: Sistema de gestión de bases de datos relacional para almacenar los datos.

### Frontend

- **HTML**: Lenguaje de marcado para estructurar el contenido web.
- **CSS**: Lenguaje de estilos para diseñar la interfaz de usuario y darle estilo a la página web.
- **JavaScript**: Lenguaje de programación utilizado para la interactividad en el lado del cliente.

  **Pagina principal**
  
![image](https://github.com/user-attachments/assets/394139b3-093d-4cfc-ad4c-db9ab93d003b)

  **Modal agregar producto**
  
![image](https://github.com/user-attachments/assets/1a4514d4-e122-48f8-8a9e-15ca63151708)

 **Modal editar producto**
 
![image](https://github.com/user-attachments/assets/b8f7b17c-de15-4a68-a38c-fbf9990110a6)


### Despliegue
- **Railway**: Plataforma de despliegue para aplicaciones y bases de datos. El proyecto está desplegado en Railway, lo que proporciona una infraestructura sencilla y accesible para que la API y la base de datos estén disponibles de manera remota.


### Herramientas opcionales

- **Insomnia/Postman**: Herramientas para probar las peticiones de la API.

## Funcionalidades de la API

La API ofrece las siguientes funcionalidades principales para gestionar productos en la ferretería:

- **GET** `/api/productos`: Obtiene todos los productos.
- **POST** `/api/productos`: Crea un nuevo producto en el inventario.
- **PUT** `/api/productos/:id`: Actualiza los detalles de un producto existente.
- **DELETE** `/api/productos/:id`: Elimina un producto del inventario.

### Endpoints

- `GET` para obtener productos: `https://inventario-production-fa75.up.railway.app/api/productos`
- `POST` para crear un nuevo producto: `https://inventario-production-fa75.up.railway.app/api/productos`
- `PUT` para actualizar un producto existente: `https://inventario-production-fa75.up.railway.app/api/productos/${id}`
- `DELETE` para eliminar un producto: `https://inventario-production-fa75.up.railway.app/api/productos/${id}`

Nota: `{id}` se debe cambiar por el número del producto.

## Instalación

### Requisitos previos

- Tener **Node.js** y **npm** instalados en tu sistema.
- Tener un servidor de base de datos **MySQL** en funcionamiento.

Nota: Actualmente, el proyecto está funcionando en una base de datos de **Railway**.

Si no tienes **Node.js** y **npm** instalados, puedes descargarlos desde [aquí](https://nodejs.org).

### Pasos de instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jsnunez/inventario.git
   cd inventario
