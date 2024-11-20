import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarProductos.js";

async function filtrarProducto(evento) {
    evento.preventDefault();
    const datosbusqueda = document.querySelector("[data-busqueda]").value;
    const data = await conexionAPI.buscarProducto(datosbusqueda);
    /* console.log(data); */
    const listaProductos = document.querySelector("[data-lista]");

    while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
    }

    data.forEach(producto => listaProductos.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)));

    if(data.length == 0){
        listaProductos.innerHTML = `<h3 class ="mensaje-sin-productos">ℹ️ No se han encontrado productos para '${datosbusqueda}'</h3>`;
    }
}

const botonBusqueda = document.querySelector("#btn-buscar-producto");
botonBusqueda.addEventListener("click", evento => filtrarProducto(evento));