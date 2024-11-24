
![image](https://github.com/user-attachments/assets/34955fa2-1a2b-4a75-b869-36e58475da74)

# 🛒 Proyecto AluraGeek

## Descripción

Este proyecto es una tienda de productos en la cual puedes **agregar productos, eliminar productos y buscar productos**. La aplicación se conecta a una API de productos hecha en **json-server**, permitiendo una gestión dinámica y eficiente de los productos disponibles.

## Funcionalidades

1. **Agregar Productos**:
   - En la sección "AGREGAR PRODUCTO", puedes ingresar el nombre del producto, el precio y el enlace de la imagen del producto.
   - Al hacer clic en "Enviar", el producto se agrega a la lista de productos disponibles.

2. **Eliminar Productos**:
   - Cada producto en la lista tiene un icono de basura que, al hacer clic, elimina el producto de la lista.

3. **Buscar Productos**:
   - La barra de búsqueda permite filtrar los productos disponibles según el texto ingresado al hacer click en el boton de la Lupa.

## Alcances de la Aplicación

- **Interfaz de Usuario**: La interfaz es intuitiva y fácil de usar, con un diseño llamativo y moderno.
- **Conexión a API**: La aplicación se conecta a una API de productos hecha en json-server, lo que permite una gestión eficiente de los datos.
- **Gestión de Productos**: Permite agregar, eliminar y buscar productos de manera dinámica.
- **Responsividad**: La aplicación está diseñada para ser responsiva y funcionar en diferentes dispositivos y tamaños de pantalla.

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: json-server para la API de productos
- **Herramientas**: GitHub para control de versiones y colaboración

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/fernandolhoyosh/AluraGeek.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd AluraGeek
   ```
3. Instala json-server o dependencias:
   ```
   npm install -g json-server
   npm install
   ```
4. Inicia el servidor json-server:
```
json-server --watch .\database\db.json
```
5. Abrir index.html en tu navegador para ver la aplicación en funcionamiento.

## Demo Live:

https://fernandolhoyosh.github.io/AluraGeek/


Uso:

- Agregar Producto: Completa los campos en la sección "AGREGAR PRODUCTO" y haz clic en "Enviar".
- Eliminar Producto: Haz clic en el icono de basura en el producto que deseas eliminar.
- Buscar Producto: Ingresa el texto en la barra de búsqueda para filtrar los productos.

Contribuciones:

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que desees realizar.

Licencia
Este proyecto está bajo la Licencia libre.
