async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const data = conexion.json();
    return data;
}

export const conexion = {
    listarProductos
}