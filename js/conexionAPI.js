// Funcion asincrona para listar productos de la API JSON-SEVER
async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const data = conexion.json();
    return data;
}

// Funcion asincrona para añadir un nuevo producto a la API de JSON-SEVER
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
    return data;
}

// Exportar funciones
export const conexionAPI = {
    listarProductos, enviarProducto
}