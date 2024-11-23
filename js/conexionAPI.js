// Función asincrona para solicitar listar productos de la API JSON-SEVER
async function listarProductos() {
    try {
        const conexion = await fetch("https://api-alurageek-server.vercel.app/productos");
        const data = await conexion.json();
        return data;
    } catch (error) {
        throw new Error("No se puede cargar la lista de productos. Ha ocurrido un problema con la conexión 😿");
    }
    
}

// Función asincrona para solicitar añadir un nuevo producto a la API de JSON-SEVER
async function enviarProducto(nombre, precio, imagen) {
    try {
        const conexion = await fetch("https://api-alurageek-server.vercel.app/productos", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });
        
        const data = await conexion.json();
        return data;

    } catch (error) {
        throw new Error("No se puede enviar el producto. Error de conexion con la API");
    }
}

// Función asincrona para realizar una solicitud de eliminar un producto de la API de JSON-SERVER
async function enviarProductoEliminar(id) {
    try {
        const conexion = await fetch(`https://api-alurageek-server.vercel.app/productos/${id}`, {
            method: "DELETE"
        });
        const data = await conexion.json();
        return data;
    } catch (error) {
        throw new Error("No se puede eliminar el producto. Error de conexión");
    }
    
}

//Función asincrona para realizar una solicitud de busqueda de un producto en la API JSON-SERVER
async function buscarProducto(palabra) {
    try {
        const conexion = await fetch(`https://api-alurageek-server.vercel.app/productos/filtrar?query=${palabra}`);
        const data = await conexion.json();
        return data;
    } catch (error) {
        throw new Error("Error al buscar productos. No hay conexion con el servidor");
    }
}

// Exportar funciones
export const conexionAPI = {
    listarProductos, enviarProducto, enviarProductoEliminar, buscarProducto
}
