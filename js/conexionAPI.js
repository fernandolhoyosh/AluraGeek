// Función asincrona para solicitar listar productos de la API JSON-SEVER
async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos");
        const data = await conexion.json();
        return data;
    } catch (error) {
        throw new Error("No se puede cargar la lista de productos. Ha ocurrido un problema con la conexión 😿");
    }
    
}

// Función asincrona para solicitar añadir un nuevo producto a la API de JSON-SEVER
async function enviarProducto(nombre, precio, imagen) {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
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
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    const data = await conexion.json();
    return data;
}

//Función asincrona para realizar una solicitud de busqueda de un producto en la API JSON-SERVER
async function buscarProducto(palabra) {
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabra}`);
    const data = await conexion.json();
    return data;
}

// Exportar funciones
export const conexionAPI = {
    listarProductos, enviarProducto, enviarProductoEliminar, buscarProducto
}