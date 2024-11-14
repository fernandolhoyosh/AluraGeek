// Función asincrona para solicitar listar productos de la API JSON-SEVER
async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const data = await conexion.json();
    return data;
}

// Función asincrona para solicitar añadir un nuevo producto a la API de JSON-SEVER
async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });
    const data = conexion.json();

    if (!conexion.ok) {
        throw new Error("No se puede enviar el producto. Error de conexion");
    }

    return data;
}

// Función asincrona para realizar una solicitud de eliminar un producto de la API de JSON-SERVER
async function enviarProductoEliminar(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE"
    });
    const data = await conexion.json();
    return data;
}

// Exportar funciones
export const conexionAPI = {
    listarProductos, enviarProducto, enviarProductoEliminar
}