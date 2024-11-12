import { conexionAPI } from "./conexionAPI.js";

const listaProductos = document.querySelector("[data-lista]");

function crearCard(id, nombre, precio, imagen){
    const producto = document.createElement("li");
    producto.id = id;
    producto.className = "card__producto";
    producto.innerHTML = `
    <img src="${imagen}" class="imagen__producto" alt="imagen producto ${nombre}">
    <p>${nombre}</p>
    <div class="card__producto-info">
        <p>$ ${precio}</p>
        <button class="btn-eliminar-producto">
            <img src="../assets/icon-trash.png">
        </button>
    </div>`;

    return producto;
}

async function mostrarProductos(){
    const data = await conexionAPI.listarProductos();
    /* console.log(data) */
    data.forEach(producto => listaProductos.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)));
}

mostrarProductos();